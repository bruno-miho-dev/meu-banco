import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ icon, label, isSelected, onClick, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonClasses = () => {
    if (isSelected) {
      return 'bg-[#1BC681] text-white'; // Estado Selecionado
    } else if (isHovered) {
      return 'bg-white text-[#1BC681] border-none'; // Estado Hover
    }
    return 'bg-white text-[#484848]'; // Estado Normal
  };

  const getIconClasses = () => {
    if (isSelected) {
      return 'text-white'; // Ícone no estado Selecionado
    } else if (isHovered) {
      return 'text-[#484848]'; // Ícone no estado Hover
    }
    return 'text-[#484848]'; // Ícone no estado Normal
  };

  return (
    <Link to={to}>
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center space-x-4 p-3 rounded-l-[12px] cursor-pointer ${getButtonClasses()}`}
      >
        <div
          className={`w-6 h-6 ${getIconClasses()} flex items-center justify-center`}
        >
          {React.cloneElement(icon, {
            className: `w-6 h-6 ${getIconClasses()}`,
          })}{' '}
          {/* Aplica a cor do ícone */}
        </div>
        <span className="text-lg font-semibold">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarButton;
