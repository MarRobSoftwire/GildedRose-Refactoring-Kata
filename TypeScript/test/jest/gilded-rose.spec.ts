import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {

  it('should reduce sellIn by 1',()=>{
    const gildedRose = new GildedRose([new Item('foo',10,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });
  it('should reduce quality by 1, before sell-by-date',()=>{
    const gildedRose = new GildedRose([new Item('foo',1,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });
  it('should reduce quality by 2 after sell-by',()=>{
    const gildedRose = new GildedRose([new Item('foo',0,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
  it('should not reduce quality below 0',()=>{
    const gildedRose = new GildedRose([new Item('foo',1,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it('should increase quality of Aged Brie by 1 before sell-by',()=>{
    const gildedRose = new GildedRose([new Item('Aged Brie',1,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
  it('should increase quality of Aged Brie by 2, after sell-by',()=>{
    const gildedRose = new GildedRose([new Item('Aged Brie',0,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
  it('should keep quality of Aged Brie below 50',()=>{
    const gildedRose = new GildedRose([new Item('Aged Brie',1,50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it('should fix quality of Sulfuras at 80, whilst in-date',()=>{
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros',1,80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it('should fix quality of Sulfuras at 80, after sell-by',()=>{
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros',0,80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it('should increase quality of backstage pass by 1 when sellIn > 10',()=>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',11,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
  it('should increase quality of backstage pass by 2 when sellIn = 10',()=>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',10,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
  it('should increase quality of backstage pass by 2 when sellIn = 6',()=>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',6,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
  it('should increase quality of backstage pass by 3 when sellIn = 5',()=>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',5,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
  it('should increase quality of backstage pass by 3 when sellIn = 1',()=>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',1,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
  it('should make quality of backstage pass 0 once sellIn =0',()=>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',0,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  //new functionality:
  /*
  it('should reduce quality of conjured product by 2 when sellIn>0',()=>{
    const gildedRose = new GildedRose([new Item('conjured',1,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
  it('should reduce quality of conjured product by 4 when sellIn<=0',()=>{
    const gildedRose = new GildedRose([new Item('conjured',0,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
  */
});
