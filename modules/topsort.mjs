export function topsort(binary_relations) {
    var value_list = values(binary_relations);
    var inDegree = calulate_inDegree(binary_relations, value_list);
    var next = [];
    var sortierte_liste = [];

    for (key in inDegree) {
        if (inDegree[key].degree === 0) {
            next.push(key);
        }
    }

    var k = 1;

    if (next.length === 0) {
        return -2;
    }

    do {
        var current_item = next.pop();
        sortierte_liste.push(current_item);
        k += 1;
        inDegree[current_item].nachfolger.forEach(function (item) {
            if (inDegree[item].degree > 1) {
                inDegree[item].degree -= 1;
            } else {
                next.push(item);
            }
        })
    } while (next.length !== 0);

    if (k !== value_list.length + 1) {
        return -1;
    }

    return sortierte_liste;
}

// Zu dem entsprechenden Eintrag ermitteln wir die Nachfolger als auch den Grad, 
// wie viele Vorgaenger dieser hat.
function calulate_inDegree(relationen, elements) {
    // Anlegen eines Objekt-Arrays, nach dem Key-Value-Prinzip
    var inDegree = {};
    elements.forEach(item => {
        inDegree[item] = { name: item, degree: 0, nachfolger: [] };
    })

    relationen.forEach(items => {
        inDegree[items[1]].degree += 1;
        if (!inDegree[items[0]].nachfolger.includes(items[1])) {
            inDegree[items[0]].nachfolger.push(items[1]);
        }
    })
    return inDegree;
}

// Aus den binaeren Relationen eine Liste erzeugen, die
// die Werte genau einmal enthaelt
function values( array ) {
    let arrval = []
    
    for( let x of array ) {
        if( !arrval.includes(x[0]) )
            arrval.push( x[0] )        
    }
    
    for( let y of array ) {
        if( !arrval.includes(y[1]) ) {
            arrval.push( y[1] )       
        }
    }
    
    return arrval
}