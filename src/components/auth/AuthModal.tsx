import React from 'react';
import Modal from '../common/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
}

export default function AuthModal({ isOpen, onClose, mode }: AuthModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        {mode === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </Modal>
  );
}