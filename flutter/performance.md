# performance

## StatefulWidget

widget stores mutable state.

<https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html>
的`Performance considerations`部分

将状态存在更高层的 widget 里面，<https://flutter.dev/docs/development/ui/widgets-intro> <https://github.com/caijw/flutter_demo/blob/master/app2/lib/main.dart>，示例中，ShoppingListItem

### reuse the state

When the widget is first inserted into the tree, the framework calls the createState() function to create a fresh instance of _XXXState to associate with that location in the tree. (Notice that subclasses of State are typically named with leading underscores to indicate that they are private implementation details.) When this widget’s parent rebuilds, the parent creates a new instance of ShoppingList, but the framework reuses the _XXXState instance that is already in the tree rather than calling createState again.

### state accesses the properties of the current XXXWidget

the _XXXState can use its widget property. If the parent rebuilds and creates a new XXXWidget, the _XXXState rebuilds with the new widget value. If you wish to be notified when the widget property changes, override the didUpdateWidget() function, which is passed as oldWidget to let you compare the old widget with the current widget.

### signal to the framework that it changed its internal state

wraps those calls in a setState() call. Calling setState marks this widget as dirty and schedules it to be rebuilt the next time your app needs to update the screen. If you forget to call setState when modifying the internal state of a widget, the framework won’t know your widget is dirty and might not call the widget’s build() function, which means the user interface might not update to reflect the changed state. By managing state in this way, you don’t need to write separate code for creating and updating child widgets. Instead, you simply implement the build function, which handles both situations.

### Responding to widget lifecycle events

#### initState

After calling createState() on the StatefulWidget, the framework inserts the new state object into the tree and then calls initState() on the state object. A subclass of State can override initState to do work that needs to happen just once. For example, override initState to configure animations or to subscribe to platform services. Implementations of initState are required to start by calling super.initState.

When a state object is no longer needed, the framework calls dispose() on the state object. Override the dispose function to do cleanup work. For example, override dispose to cancel timers or to unsubscribe from platform services. Implementations of dispose typically end by calling super.dispose.

## RenderObjectWidget

<https://api.flutter.dev/flutter/widgets/RenderObjectWidget-class.html>

## RenderObject

<https://api.flutter.dev/flutter/rendering/RenderObject-class.html>

## RenderObjectElement

<https://api.flutter.dev/flutter/widgets/RenderObjectElement-class.html>

## State

<https://api.flutter.dev/flutter/widgets/State-class.html>

## setState

<https://api.flutter.dev/flutter/widgets/State/setState.html>
