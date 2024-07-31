import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  clipButtonStyle,
  clipButtonSuccessStyle,
  clipButtonContentStyle,
  clipButtonSuccessContentStyle,
} from "./ClipBoardButton.css";
import { ReactComponent as ClipBoardIcon } from "public/icons/clipboard.svg";

const ClipBoardButton = () => {
  const [isCliped, setIsCliped] = useState<boolean>(false);
  const initialText = "클립보드에 복사";
  const changeText = "복사되었습니다!";

  return (
    <AnimatePresence mode="wait">
      {isCliped ? (
        <motion.button
          css={clipButtonSuccessStyle}
          onClick={() => setIsCliped(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            css={clipButtonSuccessContentStyle}
            key="action"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            <ClipBoardIcon />
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          css={clipButtonStyle}
          onClick={() => setIsCliped(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            css={clipButtonContentStyle}
            key="reaction"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            <ClipBoardIcon />
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ClipBoardButton;
