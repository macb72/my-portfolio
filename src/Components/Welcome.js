import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../Styles/Welcome.css'; // Import the CSS for styling

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      textVisible: true,
      isAtTop: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showDescription: true });
    }, 500);

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isAtTop } = this.state;
    if (window.scrollY <= 100 && !this.state.textVisible && isAtTop) {
      this.setState({ textVisible: true, isAtTop: false });
    } else if (window.scrollY > 100 && this.state.textVisible && !isAtTop) {
      this.setState({ textVisible: false, isAtTop: true });
    }
  };

  handleLearnMoreClick = () => {
    this.props.onLearnMoreClick();
  };

  render() {
    const { showDescription, textVisible } = this.state;
    const initial = { opacity: 0, y: 50 }
    const animate = { opacity: 1, y: 0 }

    return (
      <div className="welcome-container">
        {textVisible && (
          <>
            <motion.h1
              className="welcome-heading"
              initial={initial}
              animate={animate}
              transition={{ duration: 1 }}
            >
              Hello, I'm Mohd Arfat!
            </motion.h1>
            {showDescription && (
              <motion.h2
                className="welcome-subheading"
                initial={initial}
                animate={animate}
                transition={{ duration: 1, delay: 0.5 }}
              >
                I create stunning websites with MERN Stack
              </motion.h2>
            )}
          </>
        )}
        <motion.div
          className="scroll-down-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={this.handleLearnMoreClick}
        >
          <FaAngleDoubleDown />
        </motion.div>
      </div>
    );
  }
}

export default Welcome;
