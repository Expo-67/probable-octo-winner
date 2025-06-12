"use client";
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Client References
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &quot;James led the design and development of Stramco&apos;s
              website and internal dashboard user interfaces with exceptional
              skill and attention to detail.&quot;
            </p>
            <div className="flex items-center">
              <div className="bg-gray-200 dark:bg-gray-700 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Daglous Gechungi
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Executive Director, Stramco Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &quot;The portfolio website James created for me perfectly
              showcases my digital marketing services and achievements with a
              clean, professional design.&quot;
            </p>
            <div className="flex items-center">
              <div className="bg-gray-200 dark:bg-gray-700 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Laura Kalela
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Digital Marketer
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &quot;James is currently developing our landscape architecture
              website. His ability to translate our vision for sustainable
              landscaping into a beautiful digital presence is impressive.&quot;
            </p>
            <div className="flex items-center">
              <div className="bg-gray-200 dark:bg-gray-700 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Gideon Sikento
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Director, Raponi Gardens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
