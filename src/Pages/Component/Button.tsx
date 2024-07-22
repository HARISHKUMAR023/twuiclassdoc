import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const [tooltipText, setTooltipText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => setTooltipText('Copy'), 2000);
    });
  };

  return (
    <div className="relative">
      <pre className="bg-slate-700 text-white p-4 rounded mt-2">
        {code}
      </pre>
      <button
        className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-2 rounded"
        onClick={handleCopy}
        data-tooltip-id="copyTooltip"
        data-tooltip-content={tooltipText}
      >
        Copy
      </button>
      <ReactTooltip id="copyTooltip" place="top" className='rounded' />
    </div>
  );
};

const Button: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Button Components</h2>
      <p className="text-lg mb-6">
        The TailwindUIClass library provides a variety of button styles to suit different use cases. Below are examples of how to use each button variant in your application.
      </p>
      
      <h3 className="text-3xl font-semibold mb-3">Button Variants</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-2xl font-semibold mb-2">Primary Button</h4>
          <button className="btn btn-primary">Primary Button</button>
          <CodeSnippet code={`<button className="btn btn-primary">Primary Button</button>`} />
        </div>
        
        <div>
          <h4 className="text-2xl font-semibold mb-2">Secondary Button</h4>
          <button className="btn btn-secondary">Secondary Button</button>
          <CodeSnippet code={`<button className="btn btn-secondary">Secondary Button</button>`} />
        </div>
        
        <div>
          <h4 className="text-2xl font-semibold mb-2">Danger Button</h4>
          <button className="btn btn-danger">Danger Button</button>
          <CodeSnippet code={`<button className="btn btn-danger">Danger Button</button>`} />
        </div>
        
        <div>
          <h4 className="text-2xl font-semibold mb-2">Warning Button</h4>
          <button className="btn btn-warning">Warning Button</button>
          <CodeSnippet code={`<button className="btn btn-warning">Warning Button</button>`} />
        </div>
        
        <div>
          <h4 className="text-2xl font-semibold mb-2">Success Button</h4>
          <button className="btn btn-success">Success Button</button>
          <CodeSnippet code={`<button className="btn btn-success">Success Button</button>`} />
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-2">Outline Primary Button</h4>
          <button className="btn btn-outline-primary">Outline Primary Button</button>
          <CodeSnippet code={`<button className="btn btn-outline-primary">Outline Primary Button</button>`} />
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-2">Outline Secondary Button</h4>
          <button className="btn btn-outline-secondary">Outline Secondary Button</button>
          <CodeSnippet code={`<button className="btn btn-outline-secondary">Outline Secondary Button</button>`} />
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-2">Outline Danger Button</h4>
          <button className="btn btn-outline-danger">Outline Danger Button</button>
          <CodeSnippet code={`<button className="btn btn-outline-danger">Outline Danger Button</button>`} />
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-2">Outline Warning Button</h4>
          <button className="btn btn-outline-warning">Outline Warning Button</button>
          <CodeSnippet code={`<button className="btn btn-outline-warning">Outline Warning Button</button>`} />
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-2">Outline Success Button</h4>
          <button className="btn btn-outline-success">Outline Success Button</button>
          <CodeSnippet code={`<button className="btn btn-outline-success">Outline Success Button</button>`} />
        </div>
      </div>
    </div>
  );
};

export default Button;
