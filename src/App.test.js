import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const artist = screen.getByText(/Artist Search/i);
  expect(artist).toBeInTheDocument();
});

test('render submit button', () => {
  render(<App />);
  var searchButton = screen.getByText("Search");
  expect(searchButton).toBeInTheDocument();
});

test('render search input field', () => {
  render(<App />);
  const inputEl = screen.getByTestId("search-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("placeholder", "Artist name");
});

test('pass valid search in input field', () => {
  render(<App />);
  const inputEl = screen.getByTestId("search-input");
  userEvent.type(inputEl, "Maroon5");
  expect(screen.getByTestId("search-input")).toHaveValue("Maroon5");
});

test('Search a valid Band', async() => {
  render(<App />);
  const inputEl = screen.getByTestId("search-input");
  userEvent.type(inputEl, "Maroon5");
  userEvent.click(screen.getByText("Search"));
  await (() =>
    expect(screen.getByTestId("name")).toHaveValue("Maroon5")) 
  await (() =>
    expect(screen.getByTestId("facebook")).toBeInTheDocument())
  await (() =>
    expect(screen.getByTestId("image")).toBeInTheDocument())
});

test('Search an invalid Band', async() => {
  render(<App />);
  const inputEl = screen.getByTestId("search-input");
  userEvent.type(inputEl, "aaaaaaaaa");
  userEvent.click(screen.getByText("Search"));
  await (() =>
    expect(screen.getByTestId("oes-not-exist")).toHaveValue("[NotFound] The artist was not found"))
});