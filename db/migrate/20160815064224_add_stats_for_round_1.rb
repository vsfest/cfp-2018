# encoding utf8
class AddStatsForRound1 < ActiveRecord::Migration[5.0]
  def up
    add_column :proposals, :round1_stats, :json
    css = JSON.parse(File.read('db/round1_stats_cssconf.json'))
    js = JSON.parse(File.read('db/round1_stats_jsconf.json'))

    [css, js].each { |conf|
      conf.each_with_index { |summary, i|
        id = summary['proposal_id']
        summary['ranking'] = i
        Proposal.find(id).update_attribute('round1_stats', summary)
      }
    }
  end

  def down
    remove_column :proposals, :round1_stats
  end
end
