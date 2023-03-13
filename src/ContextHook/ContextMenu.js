import React, { createContext, useState } from "react";
export const dressMainData = createContext();
export const DressMenu = ({ children }) => {
    const [dressInfo, setDressInfo] = useState({ type: 1111 });
    // 1111-bahor
    // 2222-yoz
    // 3333-kuz
    // 4444-qish
    return (
       <div>
            <dressMainData.Provider value={[dressInfo, setDressInfo]}>
                {children}
            </dressMainData.Provider>
       </div>
    );
};
