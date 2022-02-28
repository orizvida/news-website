import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '../src/app/layout/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
let container:any = null;
    beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('finds qualified insurrance policies', () => {
  act(() => {
  render(
  <BrowserRouter>
      <Routes>   
          <Route path="*" element= {<App />}/>
      </Routes>
  </BrowserRouter>
      , container);
  });
  expect(screen.getByRole('heading', {
    name: /home/i
  }))
  screen.getByRole('button', {
    name: /add/i
  }).click()
  expect(screen.getByRole('heading', {
    name: /1/i
  }))
});
