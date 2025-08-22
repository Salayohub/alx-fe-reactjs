import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList'

test('renders initial todos', () => {
  render(<TodoList />)
  expect(screen.getByText('Learn React')).toBeInTheDocument()
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument()
})

test('adds a new todo', () => {
  render(<TodoList />)
  fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
    target: { value: 'Write tests' },
  })
  fireEvent.click(screen.getByText(/add todo/i))
  expect(screen.getByText('Write tests')).toBeInTheDocument()
})

test('toggles a todo', () => {
  render(<TodoList />)
  const todo = screen.getByText('Learn React')
  fireEvent.click(todo)
  expect(todo).toHaveClass('completed')
})

test('deletes a todo', () => {
  render(<TodoList />)
  fireEvent.click(screen.getAllByText(/delete/i)[0])
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
})
