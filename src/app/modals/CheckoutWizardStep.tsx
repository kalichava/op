import { motion } from 'framer-motion';
import './CheckoutWizardStep.css';

type CheckoutWizardStepProps = {
  step?: number | undefined;
  children: JSX.Element;
  hide?: boolean;
};

export default function CheckoutWizardStep({
  step,
  children,
  hide = true,
}: CheckoutWizardStepProps) {
  const childrenVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -24 },
  };
  const show = !hide;
  return (
    <>
      {show && (
        <motion.div variants={childrenVariants} className="checkoutWizardStep">
          {children}
        </motion.div>
      )}
    </>
  );
}
