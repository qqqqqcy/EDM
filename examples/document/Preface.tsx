import React from 'react';
import { Button } from '@component/index';
import Logo from './component/Logo';
import { Link } from 'react-router-dom';

const Preface = () => {
    return (
        <div className="preface">
            <header>
                <Logo />
                <p>
                    基于 React 的移动端组件{' '}
                    <a href="https://github.com/qqqqqcy/EDM">
                        <Button className="preface-star" _ghost _size="middle" _inline>
                            star ★
                        </Button>
                    </a>
                </p>
                <Link to="/document/button">
                    <Button className="preface-btn" _size="large" _inline>
                        document
                    </Button>
                </Link>
                <Link to="/instance">
                    <Button _ghost className="preface-btn" _size="large" _inline>
                        instance
                    </Button>
                </Link>
            </header>
        </div>
    );
};

export default Preface;
