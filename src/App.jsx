import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AchieveHome from './components/achievements/AchievementHome';
import CollectibleA from './components/achievements/CollectibleA';
import CombatA from './components/achievements/CombatA';
import CompanionA from './components/achievements/CompanionA';
import CraftingA from './components/achievements/CraftingA';
import MiscA from './components/achievements/MiscA';
import PlayerMilestones from './components/achievements/PlayerMilestones';
import QuestA from './components/achievements/QuestA';
import SettlementMilestones from './components/achievements/SettlementA';

import Automatron from './components/achievements/DLC/Automatron';
import WastelandWorkshop from './components/achievements/DLC/WW';
import FarHarbor from './components/achievements/DLC/FarHarbor';
import Contraptions from './components/achievements/DLC/Contraptions';
import VaultTecWorksop from './components/achievements/DLC/VTW';
import NukaWorld from './components/achievements/DLC/NukaWorld';

import GameGuidesHome from './components/game-guides/GameGuideHome';

function App() {
  return (
   <>
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/achievement-guides/automatron' element={<Automatron />} />
          <Route path='/achievement-guides/wasteland-workshop' element={<WastelandWorkshop />} />
          <Route path='/achievement-guides/far-harbor' element={<FarHarbor />} />
          <Route path='/achievement-guides/contraptions' element={<Contraptions />} />
          <Route path='/achievement-guides/vault-tec-workshop' element={<VaultTecWorksop />} />
          <Route path='/achievement-guides/nuka-world' element={<NukaWorld />} />
          <Route path='/achievement-guides/collectibles' element={<CollectibleA />} />
          <Route path='/achievement-guides/combat' element={<CombatA />} />
          <Route path='/achievement-guides/companions' element={<CompanionA />} />
          <Route path='/achievement-guides/crafting' element={<CraftingA />} />
          <Route path='/achievement-guides/misc' element={<MiscA />} />
          <Route path='/achievement-guides/player-milestones' element={<PlayerMilestones />} />
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
