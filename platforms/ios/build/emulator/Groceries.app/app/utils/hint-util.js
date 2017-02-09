"use strict";
function setHintColor(args) {
    var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
    args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxzQkFBNkIsSUFBdUM7SUFDbEUsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQy9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDaEIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUNqQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFQRCxvQ0FPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5kZWNsYXJlIHZhciBOU0F0dHJpYnV0ZWRTdHJpbmc6IGFueTtcbmRlY2xhcmUgdmFyIE5TRGljdGlvbmFyeTogYW55O1xuZGVjbGFyZSB2YXIgTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIaW50Q29sb3IoYXJnczogeyB2aWV3OiBUZXh0RmllbGQsIGNvbG9yOiBDb2xvciB9KSB7XG4gIGxldCBkaWN0aW9uYXJ5ID0gbmV3IE5TRGljdGlvbmFyeShcbiAgICBbYXJncy5jb2xvci5pb3NdLFxuICAgIFtOU0ZvcmVncm91bmRDb2xvckF0dHJpYnV0ZU5hbWVdXG4gICk7XG4gIGFyZ3Mudmlldy5pb3MuYXR0cmlidXRlZFBsYWNlaG9sZGVyID0gTlNBdHRyaWJ1dGVkU3RyaW5nLmFsbG9jKCkuaW5pdFdpdGhTdHJpbmdBdHRyaWJ1dGVzKFxuICAgIGFyZ3Mudmlldy5oaW50LCBkaWN0aW9uYXJ5KTtcbn0iXX0=