threeSixty = {
    init: function() {
        //this._vr = new AC.VR('viewer', 't/images/optimized/Seq_v04_640x378_##.jpg', 66, {
            this._vr = new AC.VR('viewer', 'color7/audi_r8_3d_model_turnaround_640x366_000##.jpg', 65, {
            invert: false
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, true);
}
