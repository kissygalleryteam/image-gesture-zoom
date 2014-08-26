KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('image-gesture-zoom', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/image-gesture-zoom/2.0.0/']});