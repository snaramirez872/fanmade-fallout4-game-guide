import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BaseGameAchievements from './components/achievements/base-game';
import CollectibleA from './components/achievements/CollectibleA';
import CombatA from './components/achievements/CombatA';
import CompanionA from './components/achievements/CompanionA';
import CraftingA from './components/achievements/CraftingA';
import MiscA from './components/achievements/MiscA';
import PlayerMilestones from './components/achievements/PlayerMilestones';
import QuestA from './components/achievements/QuestA';
import SettlementMilestones from './components/achievements/SettlementA';

import DLCAchievements from './components/achievements/DLC/dlc-achieve-home';
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
          <Route path='/dlc-achievements/automatron' element={<Automatron />} />
          <Route path='/dlc-achievements/wasteland-workshop' element={<WastelandWorkshop />} />
          <Route path='/dlc-achievements/far-harbor' element={<FarHarbor />} />
          <Route path='/dlc-achievements/contraptions' element={<Contraptions />} />
          <Route path='/dlc-achievements/vault-tec-workshop' element={<VaultTecWorksop />} />
          <Route path='/dlc-achievements/nuka-world' element={<NukaWorld />} />
          <Route path='/base-game-achievements/collectibles' element={<CollectibleA />} />
          <Route path='/base-game-achievements/combat' element={<CombatA />} />
          <Route path='/base-game-achievements/companions' element={<CompanionA />} />
          <Route path='/base-game-achievements/crafting' element={<CraftingA />} />
          <Route path='/base-game-achievements/misc' element={<MiscA />} />
          <Route path='/base-game-achievements/player-milestones' element={<PlayerMilestones />} />
          <Route path='/base-game-achievements/quests' element={<QuestA />} />
          <Route path='/base-game-achievements/settlements' element={<SettlementMilestones />} />
          <Route path='/base-game-achievements' element={<BaseGameAchievements />} />
          <Route path='/dlc-achievements' element={<DLCAchievements />} />
          <Route path='/game-guides' element={<GameGuidesHome />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
   </>
  )
}

export default App
