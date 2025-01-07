#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface ConsoleModalViewManager : RCTViewManager
@end

@implementation ConsoleModalViewManager

RCT_EXPORT_MODULE(ConsoleModalView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
