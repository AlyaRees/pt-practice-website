import '@testing-library/jest-dom'
import { getByTestId, render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import { userEvent } from '@testing-library/user-event'

describe('Home page', () => {
    jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) => (
    <img src={src} alt={alt} width={width} height={height} {...props} />
  ),
}))

// preconditions -> the page must be rendered.
    beforeEach(async () => {
        render(<Page/>)
    })

    it('renders the navbar logo with the alt text', async () => {
        expect(screen.getByRole('img', { name: /company logo/i })).toBeInTheDocument()
    })

    it('renders the hamburger and displays drop down menu upon clicking it', async () => {
        // preconditions -> 
        // arrange
        const hamburger = screen.getByTestId("hamburger-logo")
        expect(hamburger).toBeInTheDocument()
        expect(hamburger).toBeVisible()
        // queryBy returns null if nothing is found. getBy throws if nothing is found.
        expect(screen.queryByTestId('cross-icon')).not.toBeInTheDocument()
        expect(screen.queryByTestId('cross-icon')).toBeNull()

        // act
        await userEvent.click(hamburger)

        // assert
        expect(screen.getByTestId('cross-icon')).toBeInTheDocument()
        expect(screen.getByTestId("dropdown")).toBeInTheDocument()

    })

    it('renders the social media icons', async () => {
        // page loads

        // get icons 
        const instagram = screen.getByTestId("instagram-icon")
        const facebook = screen.getByTestId("facebook-icon")
        const twitter = screen.getByTestId("twitter-icon")

        // assert icons load
        expect(twitter).toBeInTheDocument()
        expect(twitter).toBeInTheDocument()
        expect(instagram).toBeInTheDocument()
        expect(instagram).toBeVisible()
        expect(facebook).toBeVisible()
        expect(instagram).toBeVisible()
    })
})