import React, { useState } from 'react';
import './ColorDemo.css';

/**
 * ColorDemo Component
 * 
 * Demonstrates three CSS methods in React:
 * 1. CSS Classes (.css file with class selectors)
 * 2. Inline Styles (JavaScript objects)
 * 3. Tailwind CSS (Utility-first CSS classes)
 * 
 * Each method includes dynamic background color changes using React state.
 */

const ColorDemo = () => {
  // State for CSS Class method
  const [cssClassColor, setCssClassColor] = useState('pink-light');

  // State for Inline Style method
  const [inlineColor, setInlineColor] = useState('#FFB6D9');

  // State for Tailwind method
  const [tailwindColor, setTailwindColor] = useState('bg-pink-300');

  // Color options for pink palette
  const cssClassOptions = [
    { label: 'Light Pink', value: 'pink-light' },
    { label: 'Medium Pink', value: 'pink-medium' },
    { label: 'Deep Pink', value: 'pink-deep' },
    { label: 'Hot Pink', value: 'pink-hot' },
  ];

  const inlineColorOptions = [
    { label: 'Light Pink', value: '#FFB6D9' },
    { label: 'Medium Pink', value: '#FF69B4' },
    { label: 'Deep Pink', value: '#C71585' },
    { label: 'Hot Pink', value: '#FF1493' },
  ];

  const tailwindColorOptions = [
    { label: 'Light Pink', value: 'bg-pink-300' },
    { label: 'Medium Pink', value: 'bg-pink-500' },
    { label: 'Deep Pink', value: 'bg-pink-700' },
    { label: 'Hot Pink', value: 'bg-pink-600' },
  ];

  return (
    <section className="color-demo-container">
      <div className="color-demo-content">
        <h1>CSS Color Methods Demo</h1>
        <p className="subtitle">Three ways to style components in React with dynamic color changes</p>

        <div className="methods-grid">
          {/* METHOD 1: CSS CLASSES */}
          <div className="method-card">
            <h2>Method 1: CSS Classes</h2>
            <p className="method-description">
              Traditional CSS with class selectors. Define colors in a .css file and apply classes dynamically.
            </p>

            {/* Dynamic background using CSS class */}
            <div className={`color-box ${cssClassColor}`}>
              <p>Dynamic Color via CSS Class</p>
            </div>

            <div className="button-group">
              {cssClassOptions.map((option) => (
                <button
                  key={option.value}
                  className={`color-button ${cssClassColor === option.value ? 'active' : ''}`}
                  onClick={() => setCssClassColor(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="code-snippet">
              <pre>{`// In your .css file:
.pink-light { background-color: #FFB6D9; }
.pink-medium { background-color: #FF69B4; }
.pink-deep { background-color: #C71585; }
.pink-hot { background-color: #FF1493; }

// In your React component:
const [color, setColor] = useState('pink-light');

// Apply the class dynamically
<div className={color}>
  Content
</div>`}</pre>
            </div>

            <div className="pros-cons">
              <h4>✅ Pros:</h4>
              <ul>
                <li>Clean separation of concerns</li>
                <li>Easy to maintain styles</li>
                <li>Good for consistent theming</li>
              </ul>
              <h4>❌ Cons:</h4>
              <ul>
                <li>Need to define all color variations upfront</li>
                <li>Not ideal for unlimited color choices</li>
              </ul>
            </div>
          </div>

          {/* METHOD 2: INLINE STYLES */}
          <div className="method-card">
            <h2>Method 2: Inline Styles</h2>
            <p className="method-description">
              JavaScript objects for styles. Allows dynamic values directly in JSX with full control.
            </p>

            {/* Dynamic background using inline styles */}
            <div
              className="color-box"
              style={{
                backgroundColor: inlineColor,
                transition: 'background-color 0.3s ease',
              }}
            >
              <p>Dynamic Color via Inline Style</p>
            </div>

            <div className="button-group">
              {inlineColorOptions.map((option) => (
                <button
                  key={option.value}
                  className={`color-button ${inlineColor === option.value ? 'active' : ''}`}
                  onClick={() => setInlineColor(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="code-snippet">
              <pre>{`// In your React component:
const [color, setInlineColor] = useState('#FFB6D9');

// Define style object with dynamic values
const boxStyle = {
  backgroundColor: color,
  transition: 'background-color 0.3s ease',
  padding: '2rem',
  borderRadius: '8px'
};

// Apply styles inline
<div style={boxStyle}>
  Content
</div>`}</pre>
            </div>

            <div className="pros-cons">
              <h4>✅ Pros:</h4>
              <ul>
                <li>Full dynamic control over any value</li>
                <li>No class definitions needed</li>
                <li>Easy for runtime calculations</li>
              </ul>
              <h4>❌ Cons:</h4>
              <ul>
                <li>Styles scattered throughout JSX</li>
                <li>Harder to maintain large stylesheets</li>
                <li>No CSS media queries support</li>
              </ul>
            </div>
          </div>

          {/* METHOD 3: TAILWIND CSS */}
          <div className="method-card">
            <h2>Method 3: Tailwind CSS</h2>
            <p className="method-description">
              Utility-first CSS framework. Uses predefined utility classes for rapid styling.
            </p>

            {/* Dynamic background using Tailwind classes */}
            <div className={`p-8 rounded-lg text-white text-center transition-colors duration-300 ${tailwindColor}`}>
              <p>Dynamic Color via Tailwind CSS</p>
            </div>

            <div className="button-group">
              {tailwindColorOptions.map((option) => (
                <button
                  key={option.value}
                  className={`color-button ${tailwindColor === option.value ? 'active' : ''}`}
                  onClick={() => setTailwindColor(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="code-snippet">
              <pre>{`// In your React component (Tailwind installed):
const [color, setTailwindColor] = useState('bg-pink-300');

// Use Tailwind utility classes
<div className={
  \`p-8 rounded-lg text-white transition-colors duration-300 \${color}\`
}>
  Content
</div>

// Available Tailwind pink utilities:
// bg-pink-100, bg-pink-200, bg-pink-300, bg-pink-400,
// bg-pink-500, bg-pink-600, bg-pink-700, bg-pink-800, bg-pink-900`}</pre>
            </div>

            <div className="pros-cons">
              <h4>✅ Pros:</h4>
              <ul>
                <li>Rapid development with predefined utilities</li>
                <li>Consistent design system</li>
                <li>Responsive design built-in</li>
              </ul>
              <h4>❌ Cons:</h4>
              <ul>
                <li>Limited to predefined values</li>
                <li>Requires Tailwind setup</li>
                <li>Steep learning curve initially</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="comparison-section">
          <h2>Comparison Table</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>CSS Classes</th>
                <th>Inline Styles</th>
                <th>Tailwind CSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Setup Time</strong></td>
                <td>Medium</td>
                <td>Fast</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td><strong>Flexibility</strong></td>
                <td>Medium</td>
                <td>High</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td><strong>Maintainability</strong></td>
                <td>High</td>
                <td>Low</td>
                <td>High</td>
              </tr>
              <tr>
                <td><strong>File Size</strong></td>
                <td>Medium</td>
                <td>High</td>
                <td>Small</td>
              </tr>
              <tr>
                <td><strong>Responsive Design</strong></td>
                <td>Need Media Queries</td>
                <td>Manual Logic</td>
                <td>Built-in</td>
              </tr>
              <tr>
                <td><strong>Theme Support</strong></td>
                <td>Good</td>
                <td>Good</td>
                <td>Excellent</td>
              </tr>
              <tr>
                <td><strong>Learning Curve</strong></td>
                <td>Easy</td>
                <td>Easy</td>
                <td>Medium</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BEST PRACTICES */}
        <div className="best-practices">
          <h2>Best Practices & Recommendations</h2>
          <div className="practices-grid">
            <div className="practice-card">
              <h3>🎯 Use CSS Classes When:</h3>
              <ul>
                <li>Building large applications</li>
                <li>Needing consistent theming</li>
                <li>Wanting clear separation of concerns</li>
                <li>Managing complex styles</li>
              </ul>
            </div>

            <div className="practice-card">
              <h3>🔧 Use Inline Styles When:</h3>
              <ul>
                <li>Making dynamic calculations</li>
                <li>Building simple components</li>
                <li>Needing full value flexibility</li>
                <li>Prototyping quickly</li>
              </ul>
            </div>

            <div className="practice-card">
              <h3>⚡ Use Tailwind CSS When:</h3>
              <ul>
                <li>Rapid prototyping required</li>
                <li>Consistent design system needed</li>
                <li>Team familiar with Tailwind</li>
                <li>Responsive design critical</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorDemo;
