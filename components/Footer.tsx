
import React, { useEffect } from 'react';

export const Footer: React.FC = () => {
  useEffect(() => {
  
  }, []);

  return (
    <footer className="bg-black text-zinc-500 py-6 border-t border-zinc-900 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <h5 className="text-white font-bold mb-4 text-base">kt cloud TECH UP</h5>
                <div className="mb-4">
                    <p className="leading-relaxed mb-2">
                        본 과정은 현대로템이 주관하는 K-디지털 트레이닝 디지털 선보기업 아카데미입니다.
                    </p>
                    <p className="leading-relaxed mb-2">
                        고용노동부 / 현대로템 / 한국전파진흥원 / 한국국방기술학회 / 에이콘아카데미(강남)
                    </p>
                    <p className="text-zinc-600">Copyright ⓒ kt cloud TECH UP All rights reserved.</p>
                </div>
            </div>
            <div className="md:text-right">
                <p className="font-bold text-zinc-400 mb-2">고객센터</p>
                <a 
                  href="tel:18775280" 
                  className="text-2xl font-bold text-white hover:text-red-600 transition-colors md:pointer-events-none md:cursor-default md:hover:text-white inline-block mb-4"
                >
                  1877-5280
                </a>
            </div>
        </div>

        
      </div>
    </footer>
  );
};
