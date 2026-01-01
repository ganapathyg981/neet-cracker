// Physics Topics Index - Aggregates all chapter topics
// This file serves as the central hub for all physics content

import { currentElectricityTopics } from './current-electricity';
import { rotationalMotionTopics } from './rotational-motion';
import { rayOpticsTopics } from './ray-optics';
import { electrostaticPotentialTopics } from './electrostatic-potential-capacitance';
import { movingChargesMagnetismTopics } from './moving-charges-magnetism';
import { semiconductorElectronicsTopics } from './semiconductor-electronics';
import { unitsAndMeasurementsTopics } from './units-and-measurements';
import { mathematicalToolsTopics } from './mathematical-tools';
import { oscillationsTopics } from './oscillations';
import { gravitationTopics } from './gravitation';
import { dualNatureRadiationTopics } from './dual-nature-radiation';
import { atomsTopics } from './atoms';
import { nucleiTopics } from './nuclei';
import { alternatingCurrentTopics } from './alternating-current';
import { thermodynamicsTopics } from './thermodynamics';
import { waveOpticsTopics } from './wave-optics';
import { kineticTheoryTopics } from './kinetic-theory';
import { wavesTopics } from './waves';
import { electricChargesFieldsTopics } from './electric-charges-fields';
import { motionInStraightLineTopics } from './motion-in-straight-line';
import { motionInPlaneTopics } from './motion-in-plane';
import { lawsOfMotionTopics } from './laws-of-motion';
import { workEnergyPowerTopics } from './work-energy-power';
import { centreOfMassTopics } from './centre-of-mass';
import { magnetismMatterTopics } from './magnetism-matter';
import { electromagneticInductionTopics } from './electromagnetic-induction';
import { electromagneticWavesTopics } from './electromagnetic-waves';
import { mechanicalPropertiesSolidsTopics } from './mechanical-properties-solids';
import { mechanicalPropertiesFluidsTopics } from './mechanical-properties-fluids';
import { thermalPropertiesTopics } from './thermal-properties';

// Complete topics data organized by chapter ID
export const topicsData = {
  // ============ TIER 1: High Impact Chapters (42% weightage) ============
  
  // Current Electricity - 10% weightage (HIGHEST)
  'current-electricity': currentElectricityTopics,
  
  // Rotational Motion - 6% weightage
  'rotational-motion': rotationalMotionTopics,
  
  // Ray Optics - 6% weightage
  'ray-optics': rayOpticsTopics,
  
  // Electrostatic Potential and Capacitance - 5% weightage
  'electrostatic-potential-capacitance': electrostaticPotentialTopics,
  
  // Moving Charges and Magnetism - 5% weightage
  'moving-charges-magnetism': movingChargesMagnetismTopics,
  
  // Semiconductor Electronics - 5% weightage
  'semiconductor-electronics': semiconductorElectronicsTopics,
  
  // Units and Measurements - 5% weightage
  'units-and-measurements': unitsAndMeasurementsTopics,
  
  // ============ TIER 3: Foundation Chapters ============
  
  // Mathematical Tools - 2% weightage
  'mathematical-tools': mathematicalToolsTopics,
  
  // ============ TIER 2: Medium Impact Chapters (35% weightage) ============
  
  // Oscillations - 3% weightage
  'oscillations': oscillationsTopics,
  
  // Gravitation - 3% weightage
  'gravitation': gravitationTopics,
  
  // Dual Nature of Radiation and Matter - 3% weightage
  'dual-nature-radiation': dualNatureRadiationTopics,
  
  // Atoms - 3% weightage
  'atoms': atomsTopics,
  
  // Nuclei - 4% weightage
  'nuclei': nucleiTopics,
  
  // Alternating Current - 4% weightage
  'alternating-current': alternatingCurrentTopics,
  
  // Class 11 Tier 2 (populated)
  'motion-in-straight-line': motionInStraightLineTopics,
  'motion-in-plane': motionInPlaneTopics,
  'work-energy-power': workEnergyPowerTopics,
  
  // Kinetic Theory of Gases - 3% weightage (6 topics)
  'kinetic-theory': kineticTheoryTopics,
  
  // Waves - 1% weightage (6 topics)
  'waves': wavesTopics,
  
  // Class 12 Tier 2
  // Electric Charges and Fields - 3% weightage (11 topics)
  'electric-charges-fields': electricChargesFieldsTopics,
  'electromagnetic-induction': electromagneticInductionTopics,
  'electromagnetic-waves': electromagneticWavesTopics,
  
  // ============ TIER 3: Lower Impact Chapters (~23% weightage) ============
  
  // Thermodynamics - 2% weightage
  'thermodynamics': thermodynamicsTopics,
  
  // Wave Optics - 2% weightage
  'wave-optics': waveOpticsTopics,
  
  // Mechanical Properties of Solids - 2% weightage
  'mechanical-properties-solids': mechanicalPropertiesSolidsTopics,
  
  // Mechanical Properties of Fluids - 3% weightage  
  'mechanical-properties-fluids': mechanicalPropertiesFluidsTopics,
  
  // Thermal Properties of Matter - 1% weightage
  'thermal-properties': thermalPropertiesTopics,
  
  // Magnetism and Matter - 1% weightage
  'magnetism-matter': magnetismMatterTopics,
  
  // Class 11 Tier 3 (populated)
  'laws-of-motion': lawsOfMotionTopics,
  'centre-of-mass': centreOfMassTopics,
};

// Helper function to get topics for a chapter
export const getTopicsForChapter = (chapterId) => {
  return topicsData[chapterId] || [];
};

// Helper function to get a specific topic
export const getTopic = (chapterId, topicId) => {
  const topics = topicsData[chapterId] || [];
  return topics.find(t => t.id === topicId) || null;
};

// Get all topics count
export const getTotalTopicsCount = () => {
  return Object.values(topicsData).reduce((sum, topics) => sum + topics.length, 0);
};

// Get populated chapters count
export const getPopulatedChaptersCount = () => {
  return Object.values(topicsData).filter(topics => topics.length > 0).length;
};

// Get all populated topics as flat array
export const getAllPopulatedTopics = () => {
  const allTopics = [];
  Object.entries(topicsData).forEach(([chapterId, topics]) => {
    topics.forEach(topic => {
      allTopics.push({ ...topic, chapterId });
    });
  });
  return allTopics;
};

// Statistics helper
export const getPhysicsStats = () => {
  const populatedChapters = Object.entries(topicsData)
    .filter(([, topics]) => topics.length > 0)
    .map(([id]) => id);
  
  const totalTopics = Object.values(topicsData)
    .reduce((sum, topics) => sum + topics.length, 0);
  
  const totalFormulas = Object.values(topicsData)
    .flat()
    .reduce((sum, topic) => sum + (topic.formulas?.length || 0), 0);
  
  const totalMistakes = Object.values(topicsData)
    .flat()
    .reduce((sum, topic) => sum + (topic.commonMistakes?.length || 0), 0);
  
  return {
    populatedChapters: populatedChapters.length,
    totalChapters: Object.keys(topicsData).length,
    totalTopics,
    totalFormulas,
    totalMistakes,
    chapters: populatedChapters,
  };
};
