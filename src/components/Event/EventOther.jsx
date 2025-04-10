import React from "react";

const EventOther = ({ warnings, images, map }) => {
  const hasWarnings = warnings && warnings.length > 0;
  const hasImages = images && images.length > 0;
  const hasMap = !!map;

  const hasAnyContent = hasWarnings || hasImages || hasMap;

  if (!hasAnyContent) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">
        Additional Information
      </h2>

      {/* Warnings */}
      {hasWarnings && (
        <div className="mb-8 manrope-paragraph">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">⚠️ Warnings</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Image Previews */}
      {hasImages && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">🖼️ Image Previews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Preview ${index + 1}`}
                className="rounded-xl shadow-sm border object-cover h-48 w-full"
              />
            ))}
          </div>
        </div>
      )}

      {/* Map Download */}
      {hasMap && (
        <div className="text-center">
          <a
            href={map}
            download
            className="inline-block text-indigo-600 bg-white px-6 py-2 manrope-paragraph rounded-full hover:bg-indigo-700 hover:text-white transition"
          >
            📍 Download Event Map
          </a>
        </div>
      )}
    </section>
  );
};

export default EventOther;