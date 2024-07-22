const Home = () => {
  return (
    <div className="container mx-auto p-8">
    <h2 className="text-4xl font-bold mb-4 text-primary">Welcome to TwuiClass Documentation</h2>
    <p className="text-lg mb-6">
      TailwindUIClass is a library of reusable UI class built with TailwindCSS. It helps developers quickly build and customize user interfaces with ease and consistency. Whether you're working on a small project or a large-scale application, TailwindUIClass provides the tools you need to create beautiful, responsive designs.
    </p>
    
    <h3 className="text-3xl font-semibold mb-3">Why TwuiClass?</h3>
    <ul className="list-disc list-inside mb-6">
      <li>Consistent Design: Ensures a consistent look and feel across your application.</li>
      <li>Customization: Easily customizable components to fit your specific design requirements.</li>
      <li>Productivity: Accelerates development time with ready-to-use components.</li>
      <li>Responsive: Built with mobile-first design principles, ensuring responsiveness on all devices.</li>
    </ul>

    <h3 className="text-3xl font-semibold mb-3">Features</h3>
    <ul className="list-disc list-inside mb-6">
      <li>Rich Component Library: A wide range of components for various use cases.</li>
      <li>Theme Support: Customize themes to match your branding.</li>
      <li>Utility-First: Built with TailwindCSS's utility-first approach for maximum flexibility.</li>
      <li>TypeScript Support: Fully typed components for better development experience.</li>
    </ul>

    <h3 className="text-3xl font-semibold mb-3">Getting Started</h3>
    <p className="text-lg mb-6">
      Ready to dive in? Start with the <a href="/getting-started" className="text-blue-600 underline">Getting Started</a> guide to set up TailwindUIClass in your project. Explore the <a href="/components" className="text-blue-600 underline">Components</a> section to see the available components and how to use them. Check out the <a href="/examples" className="text-blue-600 underline">Examples</a> for real-world use cases and code snippets.
    </p>

    <h3 className="text-3xl font-semibold mb-3">Contributing</h3>
    <p className="text-lg mb-6">
      We welcome contributions from the community! If you find a bug, have a feature request, or want to contribute to the codebase, please check out our <a href="https://github.com/HARISHKUMAR023/twuiclass" className="text-blue-600 underline">Contributing Guide</a>.
    </p>

    <h3 className="text-3xl font-semibold mb-3">Community</h3>
    <p className="text-lg mb-6">
      Join our community to connect with other developers, share your projects, and get help with any issues you encounter. Follow us on <a href="https://twitter.com/yourprofile" className="text-blue-600 underline">Twitter</a> and join our <a href="https://discord.com/yourserver" className="text-blue-600 underline">Discord server</a>.
    </p>
  </div>
  )
}

export default Home