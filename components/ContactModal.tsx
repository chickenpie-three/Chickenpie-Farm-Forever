import React from 'react';

const PixelChickenAvatar: React.FC = () => (
    <div className="w-24 h-24 bg-[#0f380f] rounded-full flex items-center justify-center p-1">
        <div className="w-full h-full bg-[#9bbc0f] rounded-full flex items-center justify-center">
            {/* Scaled container */}
            <div style={{ transform: 'scale(3)', imageRendering: 'pixelated' }}>
                <div className="relative w-12 h-12">
                    {/* Outline */}
                    <div className="absolute w-10 h-10 bg-[#0f380f] top-1 left-1"></div>
                    {/* Head Fill */}
                    <div className="absolute w-8 h-8 bg-white top-2 left-2"></div>
                    {/* Comb */}
                    <div className="absolute w-4 h-1 bg-[#306230] top-1 left-4"></div>
                    {/* Eye */}
                    <div className="absolute w-1 h-2 bg-[#0f380f] top-4 left-4"></div>
                    {/* Beak */}
                    <div className="absolute w-3 h-1 bg-[#306230] top-7 left-8"></div>
                    <div className="absolute w-1 h-2 bg-[#306230] top-6 left-9"></div>
                </div>
            </div>
        </div>
    </div>
);


interface ContactModalProps {
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-[#9bbc0f] border-4 border-[#0f380f] p-6 sm:p-8 rounded-md text-center flex flex-col items-center gap-4 relative w-full max-w-sm"
                onClick={(e) => e.stopPropagation()}
                style={{ fontFamily: "'Press Start 2P', monospace", imageRendering: 'pixelated' }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-0 right-1 text-4xl text-[#0f380f] font-bold hover:text-[#306230] focus:outline-none"
                    aria-label="Close"
                    style={{ lineHeight: 1}}
                >
                    &times;
                </button>

                <PixelChickenAvatar />

                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" style={{ textShadow: '2px 2px #0f380f' }}>
                    AIR
                </h2>

                <a
                    href="mailto:hello@chickenpie.co"
                    className="text-lg sm:text-xl text-white hover:text-[#306230] font-bold"
                    style={{ textShadow: '2px 2px #0f380f' }}
                >
                    CONTACT ME
                </a>
            </div>
        </div>
    );
};

export default ContactModal;
