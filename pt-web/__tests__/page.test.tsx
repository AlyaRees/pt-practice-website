import '@testing-library/jest-dom'
import { getByTestId, render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import { userEvent } from '@testing-library/user-event'

describe('Home page', () => {
// preconditions -> the page must be rendered.
    beforeEach(async () => {
        render(<Page/>)
    })
    it('renders the nav bar', async () => {
        // preconditions -> the page must be rendered.

        // arrange

        // act
        const navBar = screen.getByTestId("home-navbar")

        // assert
        expect(navBar).toBeInTheDocument()

        // postconditions ->
    })

    it('renders the navbar logo', async () => {
        const navBarLogo = screen.getByTestId("navbar-logo")
        expect(navBarLogo).toBeInTheDocument()
    })

    it('renders the hamburger and displays drop down menu upon clicking it', async () => {
        // preconditions -> 
        // arrange
        const hamburger = screen.getByTestId("hamburger-logo")
        expect(hamburger).toBeInTheDocument()
        // queryBy returns null if nothing is found. getBy throws if nothing is found.
        expect(screen.queryByTestId('cross-icon')).not.toBeInTheDocument()

        // act
        await userEvent.click(hamburger)

        // assert
        expect(screen.getByTestId('cross-icon')).toBeInTheDocument()
        expect(screen.getByTestId("dropdown")).toBeInTheDocument()

    })
})