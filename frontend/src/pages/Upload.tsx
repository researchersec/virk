import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload as UploadIcon, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Upload: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    // Validate file type
    if (!file.name.endsWith('.txt')) {
      setUploadStatus('error');
      setMessage('Only .txt files are supported');
      return;
    }

    // Validate file size (16MB limit)
    if (file.size > 16 * 1024 * 1024) {
      setUploadStatus('error');
      setMessage('File size must be less than 16MB');
      return;
    }

    setIsUploading(true);
    setUploadStatus('idle');
    setMessage('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadStatus('success');
      setMessage(`Log uploaded successfully! Log ID: ${response.data.log_id}`);
      
      // Redirect to log detail page after 2 seconds
      setTimeout(() => {
        navigate(`/logs/${response.data.log_id}`);
      }, 2000);

    } catch (error: any) {
      setUploadStatus('error');
      setMessage(error.response?.data?.error || 'Failed to upload log');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Upload Combat Log</h1>
        <p className="text-gray-400">
          Upload your World of Warcraft combat log file for analysis
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-600">
        <div
          className={`text-center ${
            isDragOver ? 'border-wow-blue bg-blue-900/20' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Drop your combat log file here
          </h3>
          <p className="text-gray-400 mb-6">
            or click to browse files
          </p>
          
          <label className="bg-wow-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer inline-flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Choose File</span>
            <input
              type="file"
              accept=".txt"
              onChange={handleFileSelect}
              className="hidden"
              disabled={isUploading}
            />
          </label>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Supported format: .txt files only</p>
            <p>Maximum file size: 16MB</p>
          </div>
        </div>
      </div>

      {/* Upload Status */}
      {uploadStatus !== 'idle' && (
        <div className={`mt-6 p-4 rounded-lg flex items-center space-x-3 ${
          uploadStatus === 'success' 
            ? 'bg-green-900/20 border border-green-600 text-green-400'
            : 'bg-red-900/20 border border-red-600 text-red-400'
        }`}>
          {uploadStatus === 'success' ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
          <span>{message}</span>
        </div>
      )}

      {/* Upload Progress */}
      {isUploading && (
        <div className="mt-6">
          <div className="bg-gray-700 rounded-full h-2">
            <div className="bg-wow-blue h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
          <p className="text-center text-gray-400 mt-2">Processing log file...</p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">How to get combat logs:</h3>
        <div className="space-y-3 text-gray-400">
          <p>1. Enable combat logging in World of Warcraft</p>
          <p>2. Use the command: <code className="bg-gray-700 px-2 py-1 rounded">/combatlog</code></p>
          <p>3. Find your log file in the WoW directory (usually in Logs folder)</p>
          <p>4. Upload the .txt file here for analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;