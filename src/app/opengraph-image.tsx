import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jonas Miederer — Cloud Architect & Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f0f1a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                }}
            >
                <div style={{ color: '#FF72E1', fontSize: 20, marginBottom: 16, letterSpacing: 4 }}>
                    JONAS-MIEDERER.DE
                </div>
                <div style={{ color: '#ffffff', fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
                    Jonas Miederer
                </div>
                <div style={{ color: '#a0a0b0', fontSize: 32 }}>
                    Cloud Architect & Software Engineer
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
                    {['AWS', 'Serverless', 'TypeScript', 'Python'].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                background: 'rgba(255,114,225,0.15)',
                                border: '1px solid rgba(255,114,225,0.3)',
                                color: '#FF72E1',
                                borderRadius: 8,
                                padding: '6px 16px',
                                fontSize: 18,
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
