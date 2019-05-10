const define = (name, value) => {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
};

define('URL', 'https://api.exchangeratesapi.io');
define('LATEST', '/latest');
define('BASE', '?base=');
