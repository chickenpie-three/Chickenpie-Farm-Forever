import React from 'react';

const COLORS = {
  BG: '#9bbc0f',
  PATH_BG: '#8bac0f',
  PATH_DOT: '#c4d49b',
  DARK_GREEN: '#306230',
  OUTLINE: '#0f380f',
  WHITE: '#e2e8f0',
};

const styleReset: React.CSSProperties = {
    imageRendering: 'pixelated',
    position: 'absolute',
    boxSizing: 'border-box',
}

const GrassTuft = ({ x, y }: { x: number; y: number }) => (
    <div style={{ ...styleReset, left: `${x}px`, top: `${y}px`, width: '12px', height: '8px' }}>
        <div style={{ ...styleReset, top: 0, left: 4, width: 4, height: 4, background: COLORS.DARK_GREEN }}></div>
        <div style={{ ...styleReset, top: 4, left: 0, width: 4, height: 4, background: COLORS.DARK_GREEN }}></div>
        <div style={{ ...styleReset, top: 4, left: 8, width: 4, height: 4, background: COLORS.DARK_GREEN }}></div>
    </div>
);

const Path = ({ x, y, width, height }: { x: number; y: number; width: number; height: number; }) => (
    <div style={{
        ...styleReset,
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: COLORS.PATH_BG,
        backgroundImage: `radial-gradient(${COLORS.PATH_DOT} 2px, transparent 2px)`,
        backgroundSize: '12px 12px',
    }}></div>
);

const PixelTree = ({ x, y }: { x: number; y: number; }) => (
    <div style={{ ...styleReset, left: `${x}px`, top: `${y}px`, width: '64px', height: '72px' }}>
        <div style={{ ...styleReset, bottom: 4, left: 8, width: '48px', height: '12px', background: 'rgba(0,0,0,0.05)', borderRadius: '50%'}}></div>
        <div style={{ ...styleReset, bottom: 8, left: 24, width: '16px', height: '16px', background: COLORS.DARK_GREEN }}></div>
        <div style={{ ...styleReset, top: 0, left: 0, width: '64px', height: '56px', background: COLORS.DARK_GREEN, borderRadius: '50%' }}></div>
        <div style={{ ...styleReset, top: 4, left: 4, width: '56px', height: '48px', background: COLORS.BG, borderRadius: '50%' }}></div>
        <div style={{ ...styleReset, top: 8, left: 8, width: '48px', height: '40px', background: COLORS.DARK_GREEN, borderRadius: '50%' }}></div>
    </div>
);

const FoodShop = ({ x, y }: { x: number; y: number; }) => (
    <div style={{ ...styleReset, left: `${x}px`, top: `${y}px`, width: '152px', height: '144px', background: COLORS.OUTLINE}}>
        <div style={{ ...styleReset, top: '4px', left: '4px', width: '144px', height: '136px', background: COLORS.WHITE}}>
            <div style={{ ...styleReset, top: '0px', left: '0px', width: '144px', height: '56px', background: COLORS.PATH_BG, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, #9bbc0f 8px, #9bbc0f 16px)'}}></div>
            <div style={{ ...styleReset, top: '56px', left: '0', width: '144px', height: '4px', background: COLORS.DARK_GREEN }}></div>
            <div style={{ ...styleReset, top: '60px', left: '0', width: '144px', height: '28px', background: COLORS.DARK_GREEN }}>
                <div style={{color: COLORS.WHITE, fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold', ...styleReset, top: '2px', left: '20px', letterSpacing: '4px'}}>FOOD</div>
                 <div style={{ ...styleReset, width: '12px', height: '12px', background: COLORS.BG, borderRadius: '50%', top: '8px', right: '16px' }}></div>
            </div>
            <div style={{ ...styleReset, top: '88px', left: '0px', width: '144px', height: '4px', background: COLORS.OUTLINE}}></div>
            <div style={{ ...styleReset, top: '92px', left: '0px', width: '144px', height: '12px', background: COLORS.WHITE, backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.DARK_GREEN}, ${COLORS.DARK_GREEN} 12px, ${COLORS.WHITE} 12px, ${COLORS.WHITE} 24px)`}}></div>
            <div style={{ ...styleReset, top: '104px', left: '12px', width: '120px', height: '32px', background: COLORS.DARK_GREEN }}></div>
            <div style={{ ...styleReset, top: '108px', left: '60px', width: '68px', height: '24px', background: COLORS.BG }}></div>
            <div style={{ ...styleReset, top: '108px', left: '16px', width: '32px', height: '28px', background: COLORS.PATH_BG }}></div>
            <div style={{ ...styleReset, top: '120px', left: '28px', width: '8px', height: '4px', background: COLORS.DARK_GREEN }}></div>
            <div style={{ ...styleReset, top: '24px', right: '20px', width: '28px', height: '20px', background: COLORS.DARK_GREEN }}></div>
            <div style={{ ...styleReset, top: '26px', right: '22px', width: '24px', height: '16px', background: COLORS.BG }}></div>
            <div style={{ ...styleReset, top: '34px', right: '22px', width: '24px', height: '2px', background: COLORS.DARK_GREEN }}></div>
            <div style={{ ...styleReset, top: '26px', right: '33px', width: '2px', height: '16px', background: COLORS.DARK_GREEN }}></div>
        </div>
    </div>
);

const House = ({ x, y }: { x: number; y: number; }) => (
    <div style={{ ...styleReset, left: `${x}px`, top: `${y}px`, width: '128px', height: '88px', background: COLORS.OUTLINE}}>
        <div style={{ ...styleReset, top: '4px', left: '4px', width: '120px', height: '80px', background: COLORS.WHITE}}>
            {/* Roof */}
            <div style={{ ...styleReset, top: '0', left: '0', width: '120px', height: '24px', background: COLORS.PATH_BG }}></div>
            <div style={{...styleReset, top: '8px', left: '0', width: '120px', height: '4px', background: 'rgba(0,0,0,0.1)'}}></div>
            <div style={{...styleReset, top: '16px', left: '0', width: '120px', height: '4px', background: 'rgba(0,0,0,0.1)'}}></div>
            <div style={{...styleReset, top: '24px', left: '0', width: '120px', height: '4px', background: COLORS.DARK_GREEN}}></div>
            {/* Door */}
            <div style={{ ...styleReset, top: '40px', left: '12px', width: '28px', height: '40px', background: COLORS.DARK_GREEN}}></div>
            <div style={{ ...styleReset, top: '44px', left: '16px', width: '20px', height: '32px', background: COLORS.PATH_BG}}></div>
            {/* Window */}
            <div style={{ ...styleReset, top: '40px', left: '52px', width: '60px', height: '24px', background: COLORS.DARK_GREEN}}></div>
            <div style={{ ...styleReset, top: '44px', left: '56px', width: '52px', height: '16px', background: COLORS.BG}}></div>
        </div>
    </div>
);

const ZigZagBorder = ({ width, height, color }: { width: number; height: number; color: string; }) => (
    <div style={{ ...styleReset, width: `${width}px`, height: `${height}px`,
        backgroundImage: `
            repeating-linear-gradient(45deg, ${color}, ${color} 4px, transparent 4px, transparent 8px),
            repeating-linear-gradient(135deg, ${color}, ${color} 4px, transparent 4px, transparent 8px),
            repeating-linear-gradient(45deg, transparent, transparent 0, transparent 0),
            repeating-linear-gradient(135deg, transparent, transparent 0, transparent 0)
        `,
        backgroundSize: '8px 8px, 8px 8px, 100% 100%, 100% 100%',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0',
        backgroundRepeat: 'repeat-x, repeat-x, no-repeat, no-repeat',
        top: 0, left: 0
    }}>
        <div style={{...styleReset, width: `${width}px`, height: `${height}px`,
            backgroundImage: `
                repeating-linear-gradient(45deg, ${color}, ${color} 4px, transparent 4px, transparent 8px),
                repeating-linear-gradient(135deg, ${color}, ${color} 4px, transparent 4px, transparent 8px)
            `,
             backgroundSize: '8px 8px, 8px 8px',
             backgroundPosition: `0 ${height-4}px, 0 ${height-4}px`,
             backgroundRepeat: 'repeat-x, repeat-x',
        }}>
        </div>
    </div>
);


const Garden = ({ x, y }: { x: number; y: number; }) => (
    <div style={{ ...styleReset, left: `${x}px`, top: `${y}px`, width: '180px', height: '120px'}}>
        <ZigZagBorder width={180} height={120} color={COLORS.DARK_GREEN} />
        <div style={{...styleReset, top: '20px', left: '10px', width: '160px', height: '2px', background: COLORS.PATH_BG}}></div>
        <div style={{...styleReset, top: '40px', left: '10px', width: '160px', height: '2px', background: COLORS.PATH_BG}}></div>
        <div style={{...styleReset, top: '60px', left: '10px', width: '160px', height: '2px', background: COLORS.PATH_BG}}></div>
        <div style={{...styleReset, top: '80px', left: '10px', width: '160px', height: '2px', background: COLORS.PATH_BG}}></div>
        <div style={{...styleReset, top: '100px', left: '10px', width: '160px', height: '2px', background: COLORS.PATH_BG}}></div>
        {/* Ladder */}
        <div style={{ ...styleReset, right: '-20px', top: '20px', width: '20px', height: '80px'}}>
            <div style={{...styleReset, left: 0, top: 0, width: '4px', height: '80px', background: COLORS.OUTLINE}}></div>
            <div style={{...styleReset, right: 0, top: 0, width: '4px', height: '80px', background: COLORS.OUTLINE}}></div>
            <div style={{...styleReset, left: 0, top: '10px', width: '20px', height: '4px', background: COLORS.OUTLINE}}></div>
            <div style={{...styleReset, left: 0, top: '25px', width: '20px', height: '4px', background: COLORS.OUTLINE}}></div>
            <div style={{...styleReset, left: 0, top: '40px', width: '20px', height: '4px', background: COLORS.OUTLINE}}></div>
            <div style={{...styleReset, left: 0, top: '55px', width: '20px', height: '4px', background: COLORS.OUTLINE}}></div>
            <div style={{...styleReset, left: 0, top: '70px', width: '20px', height: '4px', background: COLORS.OUTLINE}}></div>
        </div>
    </div>
)

const EmptyPlot = ({ x, y }: { x: number; y: number; }) => (
     <div style={{ ...styleReset, left: `${x}px`, top: `${y}px`, width: '160px', height: '120px'}}>
         <ZigZagBorder width={160} height={120} color={COLORS.DARK_GREEN} />
         <div style={{...styleReset, top: 4, left: 4, width: 152, height: 112, background: COLORS.WHITE}}></div>
     </div>
);


const Scenery: React.FC = () => {
  return (
    <>
      {/* Paths */}
      <Path x={170} y={230} width={200} height={420} />
      <Path x={250} y={150} width={40} height={80} />
      <Path x={370} y={340} width={80} height={120} />
      <Path x={80} y={650} width={90} height={120} />
      <Path x={80} y={770} width={380} height={80} />
      <Path x={170} y={850} width={290} height={40} />

      {/* Buildings and Plots */}
      <FoodShop x={40} y={80} />
      <House x={300} y={80} />
      <House x={320} y={840} />
      <Garden x={340} y={500} />
      <EmptyPlot x={40} y={500} />

      {/* Trees */}
      <PixelTree x={220} y={240} />
      <PixelTree x={420} y={240} />
      <PixelTree x={40} y={320} />
      <PixelTree x={30} y={850} />
      <PixelTree x={120} y={860} />
      <PixelTree x={210} y={870} />

      {/* Decorative Grass Tufts */}
      <GrassTuft x={20} y={240} />
      <GrassTuft x={200} y={100} />
      <GrassTuft x={450} y={100} />
      <GrassTuft x={500} y={400} />
      <GrassTuft x={280} y={480} />
      <GrassTuft x={100} y={450} />
      <GrassTuft x={20} y={700} />
      <GrassTuft x={250} y={740} />
      <GrassTuft x={500} y={800} />
    </>
  );
};

export default Scenery;