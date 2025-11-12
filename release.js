const { execSync } = require('child_process');
const { version } = require('./package.json');

try {
  console.log(`📦 Building version ${version}...`);
  execSync('pnpm build', { stdio: 'inherit' });
  
  console.log(`\n📝 Committing changes...`);
  execSync('git add .', { stdio: 'inherit' });
  
  try {
    execSync(`git commit -m "Release v${version}"`, { stdio: 'inherit' });
  } catch (e) {
    console.log('No changes to commit');
  }
  
  console.log(`\n🏷️  Creating tag v${version}...`);
  execSync(`git tag v${version}`, { stdio: 'inherit' });
  
  console.log(`\n🚀 Pushing to GitHub...`);
  execSync('git push origin main', { stdio: 'inherit' });
  execSync(`git push origin v${version}`, { stdio: 'inherit' });
  
  console.log(`\n✅ Release v${version} complete!`);
} catch (error) {
  console.error('❌ Release failed:', error.message);
  process.exit(1);
}
