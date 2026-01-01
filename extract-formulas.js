// Script to extract all formulas and application formulas from physics topics
import { topicsData } from './src/data/physics/topics/index.js';
import { physicsChapters } from './src/data/physics/chapters.js';

const results = {
  totalFormulas: 0,
  totalApplications: 0,
  chapters: []
};

// Get chapter name by ID
function getChapterName(chapterId) {
  const chapter = physicsChapters.find(c => c.id === chapterId);
  return chapter ? chapter.name : chapterId;
}

// Process all chapters and topics
Object.entries(topicsData).forEach(([chapterId, topics]) => {
  if (!topics || topics.length === 0) return;
  
  const chapterData = {
    id: chapterId,
    name: getChapterName(chapterId),
    topics: [],
    formulaCount: 0,
    applicationCount: 0
  };
  
  topics.forEach(topic => {
    if (!topic.formulas || topic.formulas.length === 0) return;
    
    const topicData = {
      id: topic.id,
      name: topic.name,
      formulas: []
    };
    
    topic.formulas.forEach(formula => {
      const formulaData = {
        id: formula.id,
        name: formula.name,
        category: formula.category,
        formula: formula.formula,
        latex: formula.latex,
        applications: []
      };
      
      if (formula.applications && formula.applications.length > 0) {
        formula.applications.forEach(app => {
          formulaData.applications.push({
            name: app.name,
            latex: app.latex,
            context: app.context,
            neet_frequency: app.neet_frequency
          });
          results.totalApplications++;
          chapterData.applicationCount++;
        });
      }
      
      topicData.formulas.push(formulaData);
      results.totalFormulas++;
      chapterData.formulaCount++;
    });
    
    if (topicData.formulas.length > 0) {
      chapterData.topics.push(topicData);
    }
  });
  
  if (chapterData.topics.length > 0) {
    results.chapters.push(chapterData);
  }
});

// Print summary
console.log('\n========================================');
console.log('NEET PHYSICS - FORMULA EXTRACTION REPORT');
console.log('========================================\n');

console.log(`📊 OVERALL STATISTICS:`);
console.log(`   Total Base/Derived Formulas: ${results.totalFormulas}`);
console.log(`   Total Application Formulas: ${results.totalApplications}`);
console.log(`   Combined Total: ${results.totalFormulas + results.totalApplications}`);
console.log(`   Chapters with Content: ${results.chapters.length}`);
console.log('');

// Print chapter-wise summary
console.log('📚 CHAPTER-WISE SUMMARY:');
console.log('─'.repeat(70));
results.chapters.forEach((chapter, idx) => {
  console.log(`${idx + 1}. ${chapter.name}`);
  console.log(`   Formulas: ${chapter.formulaCount} | Applications: ${chapter.applicationCount} | Topics: ${chapter.topics.length}`);
});
console.log('');

// Print detailed formulas
console.log('\n' + '═'.repeat(80));
console.log('DETAILED FORMULA LIST BY CHAPTER AND TOPIC');
console.log('═'.repeat(80));

results.chapters.forEach(chapter => {
  console.log(`\n\n${'▓'.repeat(80)}`);
  console.log(`▓ CHAPTER: ${chapter.name.toUpperCase()}`);
  console.log(`▓ (${chapter.formulaCount} formulas, ${chapter.applicationCount} applications)`);
  console.log(`${'▓'.repeat(80)}`);
  
  chapter.topics.forEach(topic => {
    console.log(`\n  ┌${'─'.repeat(76)}┐`);
    console.log(`  │ TOPIC: ${topic.name}`);
    console.log(`  └${'─'.repeat(76)}┘`);
    
    topic.formulas.forEach(formula => {
      console.log(`\n    ◆ ${formula.name} [${formula.category.toUpperCase()}]`);
      console.log(`      Formula: ${formula.formula}`);
      console.log(`      LaTeX: ${formula.latex}`);
      
      if (formula.applications.length > 0) {
        console.log(`      ┌── Applications (${formula.applications.length}):`);
        formula.applications.forEach((app, i) => {
          const isLast = i === formula.applications.length - 1;
          const prefix = isLast ? '└' : '├';
          console.log(`      ${prefix}── ${app.name}`);
          console.log(`      ${isLast ? ' ' : '│'}   LaTeX: ${app.latex}`);
          console.log(`      ${isLast ? ' ' : '│'}   Context: ${app.context}`);
          console.log(`      ${isLast ? ' ' : '│'}   NEET Frequency: ${app.neet_frequency || 'N/A'}`);
        });
      }
    });
  });
});

// Export JSON for reference
import { writeFileSync } from 'fs';
writeFileSync('./formula-report.json', JSON.stringify(results, null, 2));
console.log('\n\n✅ Full report saved to formula-report.json');

