package com.strange;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;

import com.reactnativestrange.Strange;
import com.reactnativestrange.StrangeFragment;
import com.reactnativestrange.models.Startup;
import com.reactnativestrange.utils.OtherUtil;

public class MainActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Strange.init(this);

    Startup startup = new Startup("sample_page1", OtherUtil.genSurfaceID(), "");
    StrangeFragment fragment = new StrangeFragment(startup);
    fragment.commit(R.id.rn_frame, this);

    Activity activity = this;
    Button button = new Button(this);
    button.setText("to sample_page1");
    button.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Strange.openScreen(activity, "sample_page1");
      }
    });
    addContentView(button, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
  }
}