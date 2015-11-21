Package.describe({
  name: 'anatei:meteor-phaser-multiplayer',
  summary: 'Phaser.io packaged for meteor',
  version: '2.2.1',
  git: 'https://github.com/Anatei/meteor-phaser-multiplayer.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('phaser/build/phaser.js', ['client', 'server'], {bare: true});
});

