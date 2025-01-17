export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++){

      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            incrementQuality(this.items[i],-1);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          incrementQuality(this.items[i],1);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 6) {
                incrementQuality(this.items[i],2);
            }else if (this.items[i].sellIn < 11) {
                incrementQuality(this.items[i],1);
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == 'Aged Brie'&& this.items[i].quality < 50){
          incrementQuality(this.items[i],1);
        } else if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
          this.items[i].quality = 0;
        } else if(this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros'){          
          incrementQuality(this.items[i],-1);
        }
      }
    }

    return this.items;
  }
}

function incrementQuality(item: Item, incr: number){
    item.quality = item.quality + incr
}