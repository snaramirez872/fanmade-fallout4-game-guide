import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AchieveHome from './components/achievements/AchievementHome';
import CollectibleA from './components/achievements/CollectibleA';
import CombatA from './components/achievements/CombatA';
import CompanionA from './components/achievements/CompanionA';
import CraftingA from './components/achievements/CraftingA';
import MiscA from './components/achievements/MiscA';
import PlayerMilestones from './components/achievements/PlayrerMilestones';
import QuestA from './components/achievements/QuestA';
import SettlementMilestones from './components/achievements/SettlementA';
import GameGuidesHome from './components/game-guides/GameGuideHome';
import './App.css'

function App() {
  return (
   <>
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/achievement-guides/collectibles' element={<CollectibleA />} />
          <Route path='/achievement-guides/combat' element={<CombatA />} />
          <Route path='/achievement-guides/companions' element={<PlayerMilestones />} />
          <Route path='/achievement-guides/crafting' element={<CompanionA />} />
          <Route path='/achievement-guides/misc' element={<CraftingA />} />
          <Route path='/achievement-guides/player-milestones' element={<MiscA />} />
          <Route path='/achievement-guides/quests' element={<QuestA />} />
          <Route path='/achievement-guides/settlements' element={<SettlementMilestones />} />
          <Route path='/achievement-guides' element={<AchieveHome />} />
          <Route path='/game-guides' element={<GameGuidesHome />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
   </>
  )
}

export default App
