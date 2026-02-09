import React from 'react';
import './ProjectsPage.css';
import ReactMarkdown from 'react-markdown';
import { Joystick, CodeSquare, Dock } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TextChunk = ({ textChunk }) => {
    if (textChunk.type === 'link') {
        return (
            <div className="text-chunk">
                <div className="link-row">
                    <p className="text-chunk-content">{textChunk.content}</p>
                    <Row className="">
                        <Col className="d-flex gap-3">
                        {textChunk.demoLink && (
                            <a
                            className="showcase-button"
                            href={textChunk.demoLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <Joystick size={16} className="me-2" />
                            Demo
                            </a>
                        )}
                        {textChunk.codeLink && (
                            <a 
                            className="showcase-button"
                            href={textChunk.codeLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <CodeSquare size={16} className="me-2" />
                            Code
                            </a>
                        )}
                        {textChunk.resourceLink && (
                            <a 
                            className="showcase-button"
                            href={textChunk.resourceLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <Dock size={16} className="me-2" />
                            Resources
                            </a>
                        )}
                        </Col>
                    </Row>
                </div>
                {textChunk.gap && (<div className="gap"></div>)}
            </div>
        );
    } else {
        return (
            <div className="text-chunk">
                <ReactMarkdown>{textChunk.content}</ReactMarkdown>
                {textChunk.gap && (<div className="gap"></div>)}
            </div>
        );
    }
};

export default TextChunk;