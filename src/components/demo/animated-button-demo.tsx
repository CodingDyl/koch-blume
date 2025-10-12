import React from 'react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { ThemeAnimatedButton } from '@/components/ui/theme-animated-button';

export function AnimatedButtonDemo() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Animated Button Components</h1>
        <p className="text-gray-600">Interactive buttons with circular hover effects</p>
      </div>

      {/* Original Sky Blue Buttons */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Original Sky Blue Style</h2>
        <div className="flex flex-wrap gap-4">
          <AnimatedButton variant="primary" size="sm">
            Small Button
          </AnimatedButton>
          <AnimatedButton variant="primary" size="md">
            Medium Button
          </AnimatedButton>
          <AnimatedButton variant="primary" size="lg">
            Large Button
          </AnimatedButton>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <AnimatedButton variant="secondary" size="md">
            Secondary Style
          </AnimatedButton>
          <AnimatedButton variant="outline" size="md">
            Outline Style
          </AnimatedButton>
        </div>
      </div>

      {/* Theme Colors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Website Theme Colors</h2>
        <div className="flex flex-wrap gap-4">
          <ThemeAnimatedButton variant="steel-blue" size="md">
            Steel Blue
          </ThemeAnimatedButton>
          <ThemeAnimatedButton variant="deep-navy" size="md">
            Deep Navy
          </ThemeAnimatedButton>
          <ThemeAnimatedButton variant="cyan" size="md">
            Cyan
          </ThemeAnimatedButton>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Usage Examples</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Import and Use:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import { AnimatedButton } from '@/components/ui/animated-button';
import { ThemeAnimatedButton } from '@/components/ui/theme-animated-button';

// Basic usage
<AnimatedButton variant="primary" size="md">
  Click Me
</AnimatedButton>

// With theme colors
<ThemeAnimatedButton variant="steel-blue" size="lg">
  Get Started
</ThemeAnimatedButton>

// With custom props
<AnimatedButton 
  variant="primary" 
  size="md"
  onClick={() => console.log('Clicked!')}
  className="custom-class"
>
  Custom Button
</AnimatedButton>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
