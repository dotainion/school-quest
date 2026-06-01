import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [points, setPoints] = useState(0);
    const [unlockedLevels, setUnlockedLevels] = useState(["level1"]);
    const [currentLevel, setCurrentLevel] = useState("level1");
    const [playerSkin, setPlayerSkin] = useState("player1");

    // --- actions ---
    const addPoints = (amount) => {
        setPoints((p) => p + amount);
    };

    const spendPoints = (amount) => {
        setPoints((p) => Math.max(0, p - amount));
    };

    const unlockLevel = (levelId) => {
        setUnlockedLevels((prev) =>
            prev.includes(levelId) ? prev : [...prev, levelId]
        );
    };

    const value = {
        points,
        addPoints,
        spendPoints,

        unlockedLevels,
        unlockLevel,

        currentLevel,
        setCurrentLevel,

        playerSkin,
        setPlayerSkin,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};