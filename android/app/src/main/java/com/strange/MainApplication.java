package com.strange;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactRootView;
import com.reactnativestrange.Strange;

public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Strange.builder()
                .setApplication(this)
                .setDebugger(true)
                .setHermes(false)
                .setRootViewHandler(ReactRootView::new)
                .addPackages(new PackageList(this).getPackages())
                .build();
    }
}
