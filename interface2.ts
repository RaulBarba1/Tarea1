interface lakes{
name: string,
area: number,
length: number,
depth: number,
isFreshwater: boolean,
countries: string[]
}
let firstlake: lakes ={
    name: 'canalon',
    length: 1199,
    depth: 1025,
    area: 12341,
    isFreshwater: false,
    countries: ['mexico','treintayochon']

}
console.log(firstlake.name);