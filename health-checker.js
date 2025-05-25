function checkHealthStatus(character) {
    const { health } = character;
  
    if (health > 50) return 'healthy'; // Зелёный
    else if (health >= 15 && health <= 50) return 'wounded'; // Жёлтый
    else return 'critical'; // Красный
  }
  
  module.exports = checkHealthStatus;