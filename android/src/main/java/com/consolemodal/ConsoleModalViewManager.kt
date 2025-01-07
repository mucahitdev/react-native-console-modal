package com.consolemodal

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.ConsoleModalViewManagerInterface
import com.facebook.react.viewmanagers.ConsoleModalViewManagerDelegate

@ReactModule(name = ConsoleModalViewManager.NAME)
class ConsoleModalViewManager : SimpleViewManager<ConsoleModalView>(),
  ConsoleModalViewManagerInterface<ConsoleModalView> {
  private val mDelegate: ViewManagerDelegate<ConsoleModalView>

  init {
    mDelegate = ConsoleModalViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<ConsoleModalView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): ConsoleModalView {
    return ConsoleModalView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: ConsoleModalView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "ConsoleModalView"
  }
}
