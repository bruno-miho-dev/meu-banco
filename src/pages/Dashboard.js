import React from 'react';
import Sidebar from '../components/Sidebar';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

// const Dashboard = () => (
// <div className="flex h-screen">
//   <Sidebar />
//   {/* Área direita do dashboard */}
//   <div className="ml-[280px] w-full overflow-y-auto p-8 bg-[#1BC681]">
//     {/* Cabeçalho com Busca e informações do usuário */}
//     <div className="flex justify-between items-center mb-12">
//       {/* Barra de busca */}
//       <div className="w-[240px]">
//         <div className="flex items-center border border-white rounded-lg px-4 py-2 bg-transparent">
//           {/* Ícone de lupa */}
//           <div className="flex items-center justify-center w-4 h-4 text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="none"
//               viewBox="0 0 20 20"
//               stroke="currentColor"
//             >
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M4.00154 9.00538C4.00154 7.67828 4.52873 6.40553 5.46713 5.46713C6.40553 4.52873 7.67828 4.00154 9.00538 4.00154C10.3325 4.00154 11.6052 4.52873 12.5436 5.46713C13.482 6.40553 14.0092 7.67828 14.0092 9.00538C14.0092 10.3325 13.482 11.6052 12.5436 12.5436C11.6052 13.482 10.3325 14.0092 9.00538 14.0092C7.67828 14.0092 6.40553 13.482 5.46713 12.5436C4.52873 11.6052 4.00154 10.3325 4.00154 9.00538ZM9.00538 2C7.89536 2 6.80124 2.26378 5.81316 2.76959C4.82509 3.2754 3.97136 4.00877 3.32232 4.90926C2.67328 5.80975 2.24752 6.85159 2.08012 7.94891C1.91272 9.04623 2.00848 10.1676 2.35949 11.2207C2.71051 12.2737 3.30674 13.2283 4.09906 14.0057C4.89137 14.7831 5.85708 15.3611 6.9166 15.6921C7.97613 16.0231 9.09914 16.0975 10.1931 15.9093C11.287 15.7211 12.3206 15.2757 13.2086 14.6097C13.2371 14.6475 13.2682 14.6833 13.3017 14.7168L16.304 17.7191C16.4927 17.9014 16.7455 18.0022 17.0079 18C17.2703 17.9977 17.5213 17.8924 17.7069 17.7069C17.8924 17.5213 17.9977 17.2703 18 17.0079C18.0022 16.7455 17.9014 16.4927 17.7191 16.304L14.7168 13.3017C14.6833 13.2682 14.6475 13.2371 14.6097 13.2086C15.3903 12.1678 15.8656 10.9302 15.9825 9.6345C16.0993 8.33878 15.853 7.03611 15.2712 5.87248C14.6894 4.70884 13.795 3.73021 12.6883 3.04625C11.5816 2.36228 10.3064 2 9.00538 2Z"
//                 fill="#FFF"
//               />
//             </svg>
//           </div>

//           {/* Input de busca */}
//           <input
//             type="text"
//             placeholder="Buscar..."
//             className="w-full bg-transparent border-none outline-none placeholder-white text-white ml-4"
//           />
//         </div>
//       </div>

//       {/* Informações do usuário e notificações */}
//       <div className="flex items-center space-x-6">
//         {/* Ícone de notificação */}
//         <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M4.84059 7.15942C4.84059 4.30995 7.15054 2 10 2C12.8495 2 15.1594 4.30995 15.1594 7.15942V7.79711C15.1594 9.32793 15.3673 10.685 15.6841 11.6353C15.8437 12.1141 16.0183 12.4513 16.1785 12.6546C16.2972 12.8051 16.368 12.8355 16.3842 12.8406C16.765 12.8446 17.0725 13.1545 17.0725 13.5362V13.6812C17.0725 14.0654 16.761 14.3768 16.3768 14.3768H3.6232C3.239 14.3768 2.92755 14.0654 2.92755 13.6812V13.5362C2.92755 13.1545 3.23504 12.8446 3.61584 12.8406C3.63208 12.8355 3.70286 12.8051 3.82147 12.6546C3.98168 12.4513 4.15638 12.1141 4.31598 11.6353C4.63273 10.685 4.84059 9.32793 4.84059 7.79711V7.15942ZM3.61224 12.8415L3.61412 12.8411L3.61302 12.8414L3.61224 12.8415Z"
//             />
//             <path d="M8.08694 15.5652C7.8243 15.5652 7.58405 15.7131 7.46579 15.9476C7.34753 16.1822 7.37144 16.4633 7.52759 16.6744C8.10645 17.4573 8.9809 18 9.99996 18C11.019 18 11.8935 17.4573 12.4724 16.6744C12.6286 16.4633 12.6524 16.1822 12.5342 15.9476C12.4159 15.7131 12.1757 15.5652 11.913 15.5652H8.08694Z" />
//           </svg>
//         </div>

//         {/* Ícone de usuário */}
//         <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M18 10C18 14.4182 14.4182 18 10 18C5.58172 18 2 14.4182 2 10C2 5.58172 5.58172 2 10 2C14.4182 2 18 5.58172 18 10ZM12.4 7.6C12.4 8.92552 11.3255 10 10 10C8.67448 10 7.6 8.92552 7.6 7.6C7.6 6.27452 8.67448 5.2 10 5.2C11.3255 5.2 12.4 6.27452 12.4 7.6ZM10 16.8C11.4272 16.8 12.7518 16.3603 13.8455 15.609C14.3286 15.2771 14.535 14.645 14.2542 14.1306C13.672 13.0642 12.4722 12.4 9.99992 12.4C7.52775 12.4 6.32798 13.0642 5.74571 14.1306C5.46484 14.645 5.67128 15.277 6.15437 15.6089C7.24814 16.3602 8.57272 16.8 10 16.8Z"
//             />
//           </svg>
//         </div>

//         {/* Nome do usuário */}
//         <div className="text-white">
//           Bem-vindo, <span className="font-semibold">Tide Cardoso</span>
//         </div>
//       </div>
//     </div>

//     <div className="min-h-screen">
//       {/* Cabeçalho com Indicadores */}
//       <div className="grid grid-cols-5 gap-4 mb-8">
//         <div class="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
//           <p class="text-[#1BC681] text-[24px] font-light">+23%</p>
//           <div>
//             <p class="text-[#484848] text-[16px] font-light">Gasto esse mês</p>
//             <p class="text-[#484848] text-2xl font-bold">
//               R$ <CountUp start={0} end={3547.67} decimals={2} duration={2} />
//             </p>
//           </div>
//         </div>
//         <div class="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
//           <p class="text-[#1BC681] text-[24px] font-light">+6%</p>
//           <div>
//             <p class="text-[#484848] text-[16px] font-light">
//               Recebido esse mês
//             </p>
//             <p class="text-[#484848] text-2xl font-bold">
//               R$ <CountUp start={0} end={7648.48} decimals={2} duration={2} />
//             </p>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
//           <p className="bg-[#1BC681] text-white font-bold rounded-[6px] px-2 py-1 text-[12px] w-[129px]">
//             +R$ 242,13 (+2.54%)
//           </p>
//           <div>
//             <p class="text-[#484848] text-[16px] font-light">Investimentos</p>
//             <p class="text-[#484848] text-2xl font-bold">
//               R$ <CountUp start={0} end={9532.62} decimals={2} duration={2} />
//             </p>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
//           <p></p>
//           <div>
//             <p class="text-[#484848] text-[16px] font-light">Cartões</p>
//             <p class="text-[#484848] text-2xl font-bold">
//               R$ <CountUp start={0} end={9532.62} decimals={2} duration={2} />
//             </p>
//           </div>
//         </div>
//         <div className="bg-[#EAE9E9] p-4 rounded-lg shadow-md flex items-center justify-center">
//           <button className="flex flex-col items-center">
//             <div className="bg-[#484848] w-10 h-10 flex items-center justify-center rounded-full">
//               <span className="text-2xl text-white">+</span>
//             </div>
//             <p className="mt-2 text-[#484848] text-[18px] font-bold">
//               configurar <br /> atalhos
//             </p>
//           </button>
//         </div>
//       </div>

//       {/* Conteúdo Principal */}
//       <div className="grid grid-cols-2 gap-6 items-start">
//         {/* Cartões */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <p className="text-lg font-bold mb-4">Cartões</p>
//           <div className="flex items-center justify-between mb-4">
//             <img
//               src="/images/meu-banco-cartao.png"
//               alt="Cartão"
//               className="w-240 h-auto rounded-lg"
//             />
//             <div className="">
//               <div className="mb-6">
//                 <p className="text-base font-light text-[#484848]">
//                   Limite disponível
//                 </p>
//                 <p className="text-2xl font-semibold text-[#484848]">
//                   R$ <CountUp start={0} end={3000} decimals={2} duration={2} />
//                 </p>
//               </div>
//               <div>
//                 <p className="text-base font-light text-[#484848]">
//                   Última compra:
//                 </p>
//                 <div className="flex items-center justify-between gap-4">
//                   <p className="text-base font-semibold text-[#484848]">
//                     Bazar Mizutu
//                   </p>
//                   <p className="text-base font-semibold text-[#484848]">
//                     R$ 300,00
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="w-[240px] h-2 bg-gray-200 rounded-full">
//               <div
//                 className="h-2 bg-green-500 rounded-full mb-2"
//                 style={{ width: '10%' }}
//               ></div>
//               <div className="flex items-center justify-between">
//                 <p className="text-sm">Limite Disponivel</p>
//                 <p className="text-sm">R$ 300/3.000</p>
//               </div>
//             </div>
//             <button className="w-[186px] mt-4 px-4 py-2 bg-green-500 text-white rounded-lg ml-14">
//               MAIS DETALHES
//             </button>
//           </div>
//         </div>

//         {/* Últimas Compras */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <p className="text-lg font-bold mb-4">Últimas compras</p>
//           <div className="space-y-6 mb-4">
//             <div className="items-compras">
//               <p className="font-bold text-[#1BC681] mb-3">03/jan</p>
//               <div className="space-y-1">
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Bazar Mizutu
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no crédito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 300,00
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Lanchonete Dez
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no débito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 125,00
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Loja Tatame velho
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no débito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 700,00
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="items-compras">
//               <p className="font-bold text-[#1BC681] mb-3">02/jan</p>
//               <div className="space-y-1">
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Bazar Mizutu
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no débito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 12,00
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Lanchonete Dez
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no débito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 85,00
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Loja Tatame velho
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no débito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 200,00
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="items-compras">
//               <p className="font-bold text-[#1BC681] mb-3">01/jan</p>
//               <div className="space-y-1">
//                 <div className="flex justify-between items-center border-b-[1px]">
//                   <div>
//                     <p className="text-sm font-normal text-[#484848]">
//                       Restaurante Italiano
//                     </p>
//                     <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
//                       Compra no débito
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-[#1BC681]">
//                     R$ 300,00
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center items-center">
//             <button className="w-[169px] mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-center">
//               VER EXTRATO
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
// );

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpa o localStorage ao deslogar
    localStorage.removeItem('user');
    navigate('/');
  };

  // Obtém o usuário do localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    navigate('/'); // Redireciona se não estiver logado
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Área direita do dashboard */}
      <div className="ml-[280px] w-full overflow-y-auto p-8 bg-[#1BC681]">
        {/* Cabeçalho com Busca e informações do usuário */}
        <div className="flex justify-between items-center mb-12">
          {/* Barra de busca */}
          <div className="w-[240px]">
            <div className="flex items-center border border-white rounded-lg px-4 py-2 bg-transparent">
              {/* Ícone de lupa */}
              <div className="flex items-center justify-center w-4 h-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00154 9.00538C4.00154 7.67828 4.52873 6.40553 5.46713 5.46713C6.40553 4.52873 7.67828 4.00154 9.00538 4.00154C10.3325 4.00154 11.6052 4.52873 12.5436 5.46713C13.482 6.40553 14.0092 7.67828 14.0092 9.00538C14.0092 10.3325 13.482 11.6052 12.5436 12.5436C11.6052 13.482 10.3325 14.0092 9.00538 14.0092C7.67828 14.0092 6.40553 13.482 5.46713 12.5436C4.52873 11.6052 4.00154 10.3325 4.00154 9.00538ZM9.00538 2C7.89536 2 6.80124 2.26378 5.81316 2.76959C4.82509 3.2754 3.97136 4.00877 3.32232 4.90926C2.67328 5.80975 2.24752 6.85159 2.08012 7.94891C1.91272 9.04623 2.00848 10.1676 2.35949 11.2207C2.71051 12.2737 3.30674 13.2283 4.09906 14.0057C4.89137 14.7831 5.85708 15.3611 6.9166 15.6921C7.97613 16.0231 9.09914 16.0975 10.1931 15.9093C11.287 15.7211 12.3206 15.2757 13.2086 14.6097C13.2371 14.6475 13.2682 14.6833 13.3017 14.7168L16.304 17.7191C16.4927 17.9014 16.7455 18.0022 17.0079 18C17.2703 17.9977 17.5213 17.8924 17.7069 17.7069C17.8924 17.5213 17.9977 17.2703 18 17.0079C18.0022 16.7455 17.9014 16.4927 17.7191 16.304L14.7168 13.3017C14.6833 13.2682 14.6475 13.2371 14.6097 13.2086C15.3903 12.1678 15.8656 10.9302 15.9825 9.6345C16.0993 8.33878 15.853 7.03611 15.2712 5.87248C14.6894 4.70884 13.795 3.73021 12.6883 3.04625C11.5816 2.36228 10.3064 2 9.00538 2Z"
                    fill="#FFF"
                  />
                </svg>
              </div>

              {/* Input de busca */}
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-transparent border-none outline-none placeholder-white text-white ml-4"
              />
            </div>
          </div>

          {/* Informações do usuário e notificações */}
          <div className="flex items-center space-x-6">
            {/* Ícone de notificação */}
            <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.84059 7.15942C4.84059 4.30995 7.15054 2 10 2C12.8495 2 15.1594 4.30995 15.1594 7.15942V7.79711C15.1594 9.32793 15.3673 10.685 15.6841 11.6353C15.8437 12.1141 16.0183 12.4513 16.1785 12.6546C16.2972 12.8051 16.368 12.8355 16.3842 12.8406C16.765 12.8446 17.0725 13.1545 17.0725 13.5362V13.6812C17.0725 14.0654 16.761 14.3768 16.3768 14.3768H3.6232C3.239 14.3768 2.92755 14.0654 2.92755 13.6812V13.5362C2.92755 13.1545 3.23504 12.8446 3.61584 12.8406C3.63208 12.8355 3.70286 12.8051 3.82147 12.6546C3.98168 12.4513 4.15638 12.1141 4.31598 11.6353C4.63273 10.685 4.84059 9.32793 4.84059 7.79711V7.15942ZM3.61224 12.8415L3.61412 12.8411L3.61302 12.8414L3.61224 12.8415Z"
                />
                <path d="M8.08694 15.5652C7.8243 15.5652 7.58405 15.7131 7.46579 15.9476C7.34753 16.1822 7.37144 16.4633 7.52759 16.6744C8.10645 17.4573 8.9809 18 9.99996 18C11.019 18 11.8935 17.4573 12.4724 16.6744C12.6286 16.4633 12.6524 16.1822 12.5342 15.9476C12.4159 15.7131 12.1757 15.5652 11.913 15.5652H8.08694Z" />
              </svg>
            </div>

            {/* Ícone de usuário */}
            <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 10C18 14.4182 14.4182 18 10 18C5.58172 18 2 14.4182 2 10C2 5.58172 5.58172 2 10 2C14.4182 2 18 5.58172 18 10ZM12.4 7.6C12.4 8.92552 11.3255 10 10 10C8.67448 10 7.6 8.92552 7.6 7.6C7.6 6.27452 8.67448 5.2 10 5.2C11.3255 5.2 12.4 6.27452 12.4 7.6ZM10 16.8C11.4272 16.8 12.7518 16.3603 13.8455 15.609C14.3286 15.2771 14.535 14.645 14.2542 14.1306C13.672 13.0642 12.4722 12.4 9.99992 12.4C7.52775 12.4 6.32798 13.0642 5.74571 14.1306C5.46484 14.645 5.67128 15.277 6.15437 15.6089C7.24814 16.3602 8.57272 16.8 10 16.8Z"
                />
              </svg>
            </div>

            {/* Nome do usuário */}
            <div className="text-white">
              Bem-vindo, <span className="font-semibold">{user.username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#1BC681] text-white rounded hover:bg-[#1a9e63] transition"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="min-h-screen">
          {/* Cabeçalho com Indicadores */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            <div class="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
              <p class="text-[#1BC681] text-[24px] font-light">+23%</p>
              <div>
                <p class="text-[#484848] text-[16px] font-light">
                  Gasto esse mês
                </p>
                <p class="text-[#484848] text-2xl font-bold">
                  R${' '}
                  <CountUp start={0} end={3547.67} decimals={2} duration={2} />
                </p>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
              <p class="text-[#1BC681] text-[24px] font-light">+6%</p>
              <div>
                <p class="text-[#484848] text-[16px] font-light">
                  Recebido esse mês
                </p>
                <p class="text-[#484848] text-2xl font-bold">
                  R${' '}
                  <CountUp start={0} end={7648.48} decimals={2} duration={2} />
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
              <p className="bg-[#1BC681] text-white font-bold rounded-[6px] px-2 py-1 text-[12px] w-[129px]">
                +R$ 242,13 (+2.54%)
              </p>
              <div>
                <p class="text-[#484848] text-[16px] font-light">
                  Investimentos
                </p>
                <p class="text-[#484848] text-2xl font-bold">
                  R${' '}
                  <CountUp start={0} end={9532.62} decimals={2} duration={2} />
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md h-[140px] flex flex-col justify-between">
              <p></p>
              <div>
                <p class="text-[#484848] text-[16px] font-light">Cartões</p>
                <p class="text-[#484848] text-2xl font-bold">
                  R${' '}
                  <CountUp start={0} end={9532.62} decimals={2} duration={2} />
                </p>
              </div>
            </div>
            <div className="bg-[#EAE9E9] p-4 rounded-lg shadow-md flex items-center justify-center">
              <button className="flex flex-col items-center">
                <div className="bg-[#484848] w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="text-2xl text-white">+</span>
                </div>
                <p className="mt-2 text-[#484848] text-[18px] font-bold">
                  configurar <br /> atalhos
                </p>
              </button>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-2 gap-6 items-start">
            {/* Cartões */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-4">Cartões</p>
              <div className="flex items-center justify-between mb-4">
                <img
                  src="/images/meu-banco-cartao.png"
                  alt="Cartão"
                  className="w-240 h-auto rounded-lg"
                />
                <div className="">
                  <div className="mb-6">
                    <p className="text-base font-light text-[#484848]">
                      Limite disponível
                    </p>
                    <p className="text-2xl font-semibold text-[#484848]">
                      R${' '}
                      <CountUp start={0} end={3000} decimals={2} duration={2} />
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-light text-[#484848]">
                      Última compra:
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-semibold text-[#484848]">
                        Bazar Mizutu
                      </p>
                      <p className="text-base font-semibold text-[#484848]">
                        R$ 300,00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[240px] h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full mb-2"
                    style={{ width: '10%' }}
                  ></div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Limite Disponivel</p>
                    <p className="text-sm">R$ 300/3.000</p>
                  </div>
                </div>
                <button className="w-[186px] mt-4 px-4 py-2 bg-green-500 text-white rounded-lg ml-14">
                  MAIS DETALHES
                </button>
              </div>
            </div>

            {/* Últimas Compras */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-4">Últimas compras</p>
              <div className="space-y-6 mb-4">
                <div className="items-compras">
                  <p className="font-bold text-[#1BC681] mb-3">03/jan</p>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Bazar Mizutu
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no crédito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 300,00
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Lanchonete Dez
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no débito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 125,00
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Loja Tatame velho
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no débito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 700,00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="items-compras">
                  <p className="font-bold text-[#1BC681] mb-3">02/jan</p>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Bazar Mizutu
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no débito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 12,00
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Lanchonete Dez
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no débito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 85,00
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Loja Tatame velho
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no débito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 200,00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="items-compras">
                  <p className="font-bold text-[#1BC681] mb-3">01/jan</p>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center border-b-[1px]">
                      <div>
                        <p className="text-sm font-normal text-[#484848]">
                          Restaurante Italiano
                        </p>
                        <p className="text-xs font-semibold text-[#B5B5B5] mb-1">
                          Compra no débito
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#1BC681]">
                        R$ 300,00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button className="w-[169px] mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-center">
                  VER EXTRATO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
