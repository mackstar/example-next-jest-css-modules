import { render, screen } from "@testing-library/react"
import Home from "../page"

describe("Home Page", () => {
  it("renders the Next.js logo", () => {
    render(<Home />)
    const logo = screen.getByAltText("Next.js logo")
    expect(logo).toBeInTheDocument()
  })

  it("renders the Vercel logo", () => {
    render(<Home />)
    const vercelLogo = screen.getByAltText("Vercel logomark")
    expect(vercelLogo).toBeInTheDocument()
  })

  it('renders the "Deploy now" button', () => {
    render(<Home />)
    const deployButton = screen.getByText("Deploy now")
    expect(deployButton).toBeInTheDocument()
  })

  it('renders the "Read our docs" link', () => {
    render(<Home />)
    const docsLink = screen.getByText("Read our docs")
    expect(docsLink).toBeInTheDocument()
  })

  it("renders the footer links", () => {
    render(<Home />)
    const learnLink = screen.getByText("Learn")
    const examplesLink = screen.getByText("Examples")
    const nextjsLink = screen.getByText("Go to nextjs.org →")

    expect(learnLink).toBeInTheDocument()
    expect(examplesLink).toBeInTheDocument()
    expect(nextjsLink).toBeInTheDocument()
  })
})
