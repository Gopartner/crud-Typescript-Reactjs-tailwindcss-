import React from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode; // Tambahkan tipe untuk properti children
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;

