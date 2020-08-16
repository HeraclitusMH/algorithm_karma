describe('Linear Search', function () {

    const Regions = [
        'Abruzzo','Basilicata','Calabria','Campania','Emilia Romagna',
        'Friuli-Venezia Giulia','Lazio','Liguria','Lombardia','Marche','Molise',
        'Piemonte','Puglia','Sardegna','Sicilia','Toscana','Trentino-Alto Adige','Umbria',
        'Val d\'Aosta','Veneto'
    ];

    it('Right region', function () {
        expect(linearSearch(Regions,'Lazio')).toBe(true);
    });

    it('Right region wrong case', function () {
        expect(linearSearch(Regions,'toScana')).toBe(true);
    });

    it('Wrong region', function () {
        expect(linearSearch(Regions,'Baden')).toBe(false);
    });

    it('Wrong region typo', function () {
        expect(linearSearch(Regions,'Tosscana')).toBe(false);
    });

    it('Wrong region extended', function () {
        expect(linearSearch(Regions,'Piemontese')).toBe(false);
    });

    it('Right region || return index', function () {
        expect(linearSearchIndex(Regions,'Lazio')).toBe(6);
    });

    it('Right region wrong case || return index', function () {
        expect(linearSearchIndex(Regions,'toScana')).toBe(15);
    });

    it('Wrong region || return index', function () {
        expect(linearSearchIndex(Regions,'Baden')).toBe(-1);
    });

    it('Wrong region typo || return index', function () {
        expect(linearSearchIndex(Regions,'Tosscana')).toBe(-1);
    });

    it('Wrong region extended || return index', function () {
        expect(linearSearchIndex(Regions,'Piemontese')).toBe(-1);
    });

});

