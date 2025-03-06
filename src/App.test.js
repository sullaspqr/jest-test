import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

describe('App komponens', () => {
test('ki kellene renderelni a usernév és a jelszó mezőket', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('felhasználónév')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('jelszo')).toBeInTheDocument();
});
test('engedélyeznie kell a űrlapmezők bevitelét', () => {
  render(<App />);

  const usernameInput = screen.getByPlaceholderText('felhasználónév');
  const passwordInput = screen.getByPlaceholderText('jelszo');

  fireEvent.change(usernameInput, { target: { value: 'user' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  expect(usernameInput.value).toBe('user');
  expect(passwordInput.value).toBe('password');
});

});