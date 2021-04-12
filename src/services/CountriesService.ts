import { Service } from "typedi";

const xhr = require('xmlhttprequest');

@Service()
export class CountriesService {

    xmlhttprequest = new xhr.XMLHttpRequest();

    getAll(req: any, res: any) {

        this.xmlhttprequest.onreadystatechange = function getRequest () {
            if (this.readyState === 4) {

                let responseArray = JSON.parse(this.responseText);
                if (req.query?.filter) {
                    if (parseInt(req.query.filter.toString())){
                        res.send({
                            status: 'ERROR',
                            data: req.query.filter.toString() + ' is not a word.'
                        });
                        return;
                    } else {
                        responseArray = CountriesService.filter(req.query.filter.toString(), responseArray);
                    }
                }

                if (req.query?.order) {
                    if (req.query.order === 'asc') {
                        responseArray.sort((a: any, b: any) => {
                            return a.vat - b.vat;
                        });
                    } else if (req.query.order === 'desc') {
                        responseArray.sort((a: any, b: any) => {
                            return b.vat - a.vat;
                        });
                    } else {
                        res.send({
                            status: 'ERROR',
                            data: req.query.order + ' is not an order param '
                        });
                        return;
                    }
                }

                res.send({
                    status: 'OK',
                    data: responseArray
                });
            }
        }
        this.xmlhttprequest.open('GET', 'https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8');
        this.xmlhttprequest.send();
    }

    static filter(filterString: string, array: []): any[] {
        const newArray: any[] = [];
        array.forEach(
            (element: any) => {
                if (element.country.includes(filterString)) {
                    newArray.push(element);
                } else if (element.code.includes(filterString)) {
                    newArray.push(element);
                }
            });
        return newArray;
    }
}
